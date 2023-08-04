import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: String,
  email: String,
  address: String,
  selectedImage: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Rest = mongoose.model('Rest', contactSchema);

export default Rest;
