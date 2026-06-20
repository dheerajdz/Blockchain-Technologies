import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAdmin extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, 'Password hash is required'],
    },
    role: {
      type: String,
      enum: ['admin'],
      default: 'admin',
    },
  },
  {
    collection: 'admin',

    timestamps: true,
    toJSON: {
      transform(_doc, ret: Record<string, unknown>) {
        ret.id = (ret._id as mongoose.Types.ObjectId).toString();
        delete ret._id;
        delete ret.__v;
        delete ret.passwordHash;
      },
    },
  }
);

AdminSchema.index({ email: 1 });

const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);

export default Admin;
