import jwt from "jsonwebtoken";

const adminMiddleware = {
  validateRegister: (req, res, next) => {
    // validate email firstname lastname
    if (!req.body.mail || !req.body.firstname || !req.body.lastname) {
      return res.status(400).json({
        status: 400,
        error: "All fields are required",
      });
    }

    // validate email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.mail)) {
      return res.status(400).json({
        status: 400,
        error: "Invalid email address",
      });
    }

    // validate firstname
    if (!/^[a-zA-Z]+$/.test(req.body.firstname)) {
      return res.status(400).json({
        status: 400,
        error: "Invalid firstname",
      });
    }

    // validate lastname
    if (!/^[a-zA-Z]+$/.test(req.body.lastname)) {
      return res.status(400).json({
        status: 400,
        error: "Invalid lastname",
      });
    }

		// validate phone
		if (!/^[0-9]{10}$/.test(req.body.phone)) {
			return res.status(400).json({
				status: 400,
				error: "Invalid phone number",
			});
		}

    // password min 6 chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        msg: "Please enter a password with min. 6 chars",
      });
    }

    // password (repeat) does not match
    if (
      !req.body.password_repeat ||
      req.body.password != req.body.password_repeat
    ) {
      return res.status(400).send({
        msg: "Both passwords must match",
      });
    }

    next();
  },
  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "SECRETKEY");
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).send({
        msg: "Your session is not valid!",
      });
    }
  },
};

export default adminMiddleware;
