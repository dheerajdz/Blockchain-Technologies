import mongoose, { Schema, Document, Model } from 'mongoose';
import { z } from 'zod';

export const BlogZodSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  category: z.string().min(1, 'Category is required').max(100, 'Category must be less than 100 characters'),
  content: z.string().min(1, 'Content is required').max(50000, 'Content must be less than 50000 characters'),
  author: z.string().min(1, 'Author is required').max(100, 'Author must be less than 100 characters'),
});

export type BlogInput = z.infer<typeof BlogZodSchema>;

export interface IBlog extends Document, BlogInput {
  id: string;
  isDeleted: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title must be less than 200 characters'],
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      maxlength: [100, 'Category must be less than 100 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true,
      maxlength: [50000, 'Content must be less than 50000 characters'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
      maxlength: [100, 'Author must be less than 100 characters'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
      index: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (_doc, ret: Record<string, unknown>) {
        ret.id = (ret._id as mongoose.Types.ObjectId).toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
      transform: function (_doc, ret: Record<string, unknown>) {
        ret.id = (ret._id as mongoose.Types.ObjectId).toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

BlogSchema.index({ isDeleted: 1, createdAt: -1 });
BlogSchema.index({ isDeleted: 1, category: 1, createdAt: -1 });
BlogSchema.index({ title: 'text', content: 'text' });

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
