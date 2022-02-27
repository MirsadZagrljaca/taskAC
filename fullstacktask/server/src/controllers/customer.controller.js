import dbErrorHandler from "../helpers/dbErrorHandler";
import customerModel from "../models/customer.model";
import _ from "lodash";

const customerById = (req, res, next, customerId) => {
  customerModel.findById(customerId).exec((err, customer) => {
    if (err || !customer) {
      return res.json({ error: "Customer not found" });
    }

    req.profile = customer;
    next();
  });
};

const create = (req, res) => {
  let customer = new customerModel(req.body);

  customer.save((err, result) => {
    if (err) {
      return res.json({ error: dbErrorHandler.getErrorMessage(err) });
    }

    res.status(200).json({ message: "Successfully added Customer!" });
  });
};

const list = async (req, res) => {
  let customers = await customerModel.find().sort({ name: "asc" });

  res.json(customers);
};

const getCustomers = async (req, res) => {
  const limit = parseInt(req.params.limit);

  let customers = await customerModel.find().limit(limit).sort({ name: "asc" });

  res.json(customers);
};

const updateForDiscount = (req, res) => {
  let customer = req.profile;

  customer.numberOfServices++;

  customer.save((err) => {
    if (err) {
      return res
        .status(400)
        .json({ error: dbErrorHandler.getErrorMessage(err) });
    }

    res.status(200).json(customer);
  });
};

const searchCustomers = async (req, res) => {
  const search = req.params.search.toLowerCase();

  var searchedCustomers = [];

  searchedCustomers = await customerModel
    .find({
      name: { $regex: search, $options: "i" },
    })
    .sort({ name: "asc" });

  if (searchCustomers.length === 0) {
    return res.json({ error: "No Results Found" });
  }

  res.json(searchedCustomers);
};

export default {
  customerById,
  create,
  list,
  getCustomers,
  updateForDiscount,
  searchCustomers,
};
