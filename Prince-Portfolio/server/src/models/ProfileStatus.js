import mongoose from 'mongoose';

const profileStatusSchema = new mongoose.Schema(
  {
    hireable: {
      type: Boolean,
      default: true,
    },
    availableForWork: {
      type: Boolean,
      default: true,
    },
    currentStatus: {
      type: String,
      enum: ['Available', 'Busy', 'On Break', 'Open to Opportunities'],
      default: 'Available',
    },
    statusMessage: {
      type: String,
      maxlength: 200,
    },
    // Singleton pattern - only one document should exist
    singleton: {
      type: Boolean,
      default: true,
      unique: true,
    },
  },
  {
    timestamps:  true,
  }
);

// Ensure only one status document exists
profileStatusSchema.pre('save', async function (next) {
  this.singleton = true;
  next();
});

const ProfileStatus = mongoose.model('ProfileStatus', profileStatusSchema);

export default ProfileStatus;