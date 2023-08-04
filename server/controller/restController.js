import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Rest from '../model/restModel.js';

const createData = asyncHandler(async (req, res) => {
  const { name, email, address, selectedImage } = req.body;

  console.log(req.body);

  const newData = new Rest({
    user: req.user._id,
    name,
    email,
    address,
    selectedImage,
  });

  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

const getData = asyncHandler(async (req, res) => {
  const data = await Rest.find();
  res.json(data);
});

const deleteData = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send('Incorrect ID');
  }
  await Rest.findByIdAndRemove(id);
  res.json({ message: 'Data deleted successfully.' });
});

const deleteMultiData = asyncHandler(async (req, res) => {
  if (req.body.length > 0) {
    await Rest.deleteMany({
      _id: {
        $in: req.body,
      },
    });
    res.json({ message: 'Data are deleted successfully.' });
  } else {
    res.status(400).json({ message: 'No Ids found' });
  }
});

const updateData = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, address, selectedImage } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No data with id: ${id}`);

  const existData = await Contact.findById(id);
  existData.name = name || existData.name;
  existData.email = email || existData.email;
  existData.address = address || existData.address;
  existData.selectedImage = selectedImage || existData.selectedImage;

  const updatedData = await existData.save();

  res.json(updatedData);
});

export {
  createData,
  getData,
  deleteData,
  deleteMultiData,
  updateData,
};
