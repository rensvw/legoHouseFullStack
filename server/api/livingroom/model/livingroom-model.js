// app/models/bear.js
import mongoose from 'mongoose';

const _livingRoomValuesSchema = {
    lamp: String,
    heating: String,
    alarm: String,
    lightSensor: String,
    tempSensor: String,
    createdAt: { type: Date, default: Date.now }
};

export default mongoose.Schema(_livingRoomValuesSchema);