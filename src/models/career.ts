import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICareer extends Document {
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  requirements: string[];
  isDeleted: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const CareerSchema = new Schema<ICareer>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title must be less than 200 characters'],
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      trim: true,
      maxlength: [100, 'Department must be less than 100 characters'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
      maxlength: [200, 'Location must be less than 200 characters'],
    },
    type: {
      type: String,
      required: [true, 'Type is required'],
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
      default: 'Full-time',
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [5000, 'Description must be less than 5000 characters'],
    },
    requirements: {
      type: [String],
      default: [],
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

CareerSchema.index({ isDeleted: 1, createdAt: -1 });
CareerSchema.index({ isDeleted: 1, department: 1, createdAt: -1 });
CareerSchema.index({ isDeleted: 1, type: 1, createdAt: -1 });

const Career: Model<ICareer> = mongoose.models.Career || mongoose.model<ICareer>('Career', CareerSchema);

export default Career;
