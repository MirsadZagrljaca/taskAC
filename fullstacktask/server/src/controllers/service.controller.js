import _ from "lodash";
import dbErrorHandler from "../helpers/dbErrorHandler";
import serviceModel from "../models/service.model";

const serviceById = (req, res, next, id) => {
  serviceModel
    .findById(id)
    .populate("customer")
    .populate("program")
    .exec((err, service) => {
      if (err || !service) {
        return res.status(400).json({ error: "Service not found" });
      }

      req.profile = service;
      next();
    });
};

const create = (req, res, next) => {
  let service = new serviceModel(req.body);

  service.save((err, result) => {
    if (err) {
      return res.json({ error: dbErrorHandler.getErrorMessage(err) });
    }

    res.status(200).json({ message: "Successfully added Service!" });
  });
};

const list = (req, res) => {
  serviceModel
    .find()
    .populate("customer")
    .populate("program")
    .exec((err, services) => {
      if (err) {
        return res.json({ error: dbErrorHandler.getErrorMessage(err) });
      }

      res.status(200).json(services);
    });
};

const read = (req, res, next) => {
  res.status(200).json(req.profile);
};

const serviceByCustomer = (req, res, next, customerId) => {
  serviceModel
    .find({ customer: customerId })
    .populate("customer")
    .populate("program")
    .exec((err, services) => {
      if (err || !services) {
        return res.status(400).json({ error: "Service not found" });
      }

      req.profile = services;
      next();
    });
};

const readByCustomers = (req, res) => {
  res.status(200).json(req.profile);
};

export default {
  serviceById,
  create,
  list,
  read,
  serviceByCustomer,
  readByCustomers,
};
