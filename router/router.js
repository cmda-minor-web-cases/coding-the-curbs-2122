import express from 'express'

import { homeRoute } from "./routes/home.js";
import { verifyRoute } from "./routes/verify.js";
import { addTimeRoute } from "./routes/addTime.js";
import { reservationRoute } from "./routes/reservation.js";
import { timeListRoute } from "./routes/timelist.js";
import { verifyCodeRoute } from "./routes/verifyCode.js";
import { offlineRoute } from "./routes/offline.js";
import {checkVerifyRoute} from "./routes/checkverify.js";

export const router = express.Router()

router
  .get('/', homeRoute)
  .get('/verify', verifyRoute)
  .get('/manage', checkVerifyRoute)
  .post('/addTime', addTimeRoute)
  .post('/reservation', reservationRoute)
  .get('/timeList', timeListRoute)
  .post('/verifyCode', verifyCodeRoute)
  .post('/checkVerify', checkVerifyRoute)
  .get('/offline', offlineRoute)