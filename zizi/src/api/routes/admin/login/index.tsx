import { useAdminUsers } from "medusa-react"

import { wrapHandler } from "@medusajs/utils";
import { Router } from "express";

const router = Router();

export default (adminRouter: Router) => {
  adminRouter.use("/login", router);
  let user = useAdminUsers;
  console.log('useAdmin', user);
  router.get("/", user);
  router.post("/", user);
};

