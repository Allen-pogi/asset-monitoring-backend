import Asset from "../models/Asset.js";

// Create a new asset
export const createAsset = async (req, res) => {
  try {
    const asset = new Asset(req.body);
    const savedAsset = await asset.save();
    res.status(201).json(savedAsset);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all assets
export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.find().sort({ createdAt: -1 });
    res.json(assets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single asset by ID
export const getAssetById = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.query;

    const asset = await Asset.findOne({ serialNumber: id, category });

    if (!asset) return res.status(404).json({ message: "Asset not found" });

    res.json(asset);
  } catch (err) {
    console.error(err); // log the real error
    res.status(500).json({ message: "Server error" });
  }
};

export const updateAsset = async (req, res) => {
  try {
    const updatedAsset = await Asset.findOneAndUpdate(
      { serialNumber: req.params.id }, // search by serialNumber
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedAsset)
      return res.status(404).json({ message: "Asset not found" });

    res.json(updatedAsset);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an asset by ID
export const deleteAsset = async (req, res) => {
  try {
    const deletedAsset = await Asset.findByIdAndDelete(req.params.id);
    if (!deletedAsset)
      return res.status(404).json({ message: "Asset not found" });
    res.json({ message: "Asset deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
