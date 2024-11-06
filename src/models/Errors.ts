import mongoose from "mongoose";

export interface IRawError {
  id?: string;
  message?: string;
  stackTrace?: string;
  ts?: number;
  device?: string;
  version?: string;
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
    version: {
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
