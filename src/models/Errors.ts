import mongoose from "mongoose";

export interface IRawError {
  id?: string;
  message?: string;
  stackTrace?: string;
  ts?: number;
  device?: string;
}

const ErrorsSchema = new mongoose.Schema<IRawError>(
  {
    message: {
      type: String,
    },
    stackTrace: {
      type: String,
    },
    ts: {
      type: Number,
    },
    device: {
      type: String,
    },
  },
  { timestamps: true },
);

type RawError = mongoose.InferSchemaType<typeof ErrorsSchema>;

module.exports = mongoose.model("RawError", ErrorsSchema);
