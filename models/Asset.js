import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    assetName: { type: String, required: true },
    classification: { type: String },
    description: { type: String },
    category: { type: String },
    serialNumber: { type: String },
    purchaseDate: { type: Date },
    issuedDate: { type: Date },
    issuedTo: { type: String },
    status: { type: String },
    generateQR: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Asset", assetSchema);
