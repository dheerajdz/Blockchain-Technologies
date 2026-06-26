import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContactInfo extends Document {
  email: string;
  phone: string;
  address: string;
  twitter?: string;
  linkedin?: string;
  officeHours?: string;
  updatedAt: Date;
}

const ContactInfoSchema = new Schema<IContactInfo>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
      default: '',
    },
    linkedin: {
      type: String,
      trim: true,
      default: '',
    },
    officeHours: {
      type: String,
      trim: true,
      default: '',
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

const ContactInfo: Model<IContactInfo> = mongoose.models.ContactInfo || mongoose.model<IContactInfo>('ContactInfo', ContactInfoSchema);

export default ContactInfo;
