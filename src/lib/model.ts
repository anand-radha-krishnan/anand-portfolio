import mongoose, { Schema } from "mongoose";

const ProjectSchema: Schema = new mongoose.Schema({
  project_type: { type: String, required: true },
  project_title: { type: String, required: true, unique: true },
  project_description: { type: String, required: true },
  project_link: { type: String, required: true },
  project_name: { type: String },
  project_details: { title: { type: String }, description: { type: String } },
});

const Project =
  mongoose.models.projects || mongoose.model("projects", ProjectSchema);

export default Project;
