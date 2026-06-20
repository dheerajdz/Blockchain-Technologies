import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  title: string;
  slug: string;
  description?: string;
  image?: string;
  link?: string;
  isDeleted: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    link: {
      type: String,
      trim: true,
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
      transform(_doc, ret: Record<string, unknown>) {
        ret.id = (ret._id as mongoose.Types.ObjectId).toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

ProjectSchema.index({ isDeleted: 1, createdAt: -1 });

const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
