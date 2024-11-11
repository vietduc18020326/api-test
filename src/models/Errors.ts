import mongoose from "mongoose";

export interface IRawError {
  id?: string;
  message?: string;
  name?: string;
  reason?: string;
  stackTrace?: string;
  ts?: number;
  device?: string;
  version?: string;
  type?: string;
}

const ErrorsSchema = new mongoose.Schema<IRawError>(
  {
    message: {
      type: String,
    },
    name: {
      type: String,
    },
    reason: {
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
    version: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true },
);

type RawError = mongoose.InferSchemaType<typeof ErrorsSchema>;

// Function to get the model with a dynamic collection name
const getErrorModel = (namespace: string) => {
  return mongoose.model<IRawError>(
    `RawError_${namespace}`, // Unique model name
    ErrorsSchema,
    `RawErrors_${namespace}`, // Collection name in MongoDB
  );
};

module.exports = {
  getErrorModel,
};
