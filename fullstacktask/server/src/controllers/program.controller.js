import _ from "lodash";
import dbErrorHandler from "../helpers/dbErrorHandler";
import programModel from "../models/program.model";

const programById = (req, res, next, id) => {
  programModel.findById(id).exec((err, program) => {
    if (err || !program) {
      return res.status(400).json({ error: "Washing Program not found" });
    }

    req.profile = program;
    next();
  });
};

const create = (req, res, next) => {
  let program = new programModel(req.body);

  program.save((err, result) => {
    if (err) {
      return res.json({ error: dbErrorHandler.getErrorMessage(err) });
    }

    res.status(200).json({ message: "Successfully Added Program!" });
  });
};

const list = (req, res) => {
  programModel.find().exec((err, programs) => {
    if (err) {
      return res.json({ error: dbErrorHandler.getErrorMessage(err) });
    }

    res.status(200).json(programs);
  });
};

const read = (req, res, next) => {
  res.status(200).json(req.profile);
};

const remove = (req, res, next) => {
  let program = req.profile;
  program.remove((err, deletedProgram) => {
    if (err) {
      return res
        .status(400)
        .json({ error: dbErrorHandler.getErrorMessage(err) });
    }
    res.status(200).json(deletedProgram);
  });
};

const update = (req, res, next) => {
  let program = req.profile;
  let data = req.body;

  program = _.extend(program, data);

  program.save((err) => {
    if (err) {
      return res
        .status(400)
        .json({ error: dbErrorHandler.getErrorMessage(err) });
    }

    res.status(200).json(program);
  });
};

export default { programById, create, list, read, update, remove };
