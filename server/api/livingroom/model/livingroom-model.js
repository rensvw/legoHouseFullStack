// app/models/bear.js
import mongoose from 'mongoose';

const _livingRoomValuesSchema = {
    lamp: { type: Number, required: true },
    heating: { type: String, required: true, trim: true },
    alarm: { type: String, required: true, trim: true },
    lightSensor: { type: String, required: true, trim: true },
    tempSensor: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
};

export default mongoose.Schema(_livingRoomValuesSchema);