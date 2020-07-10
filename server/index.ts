import 'source-map-support'
import { setLogLevel, LogLevels } from "@typegoose/typegoose";
setLogLevel(LogLevels.DEBUG);
import { startServer } from "./server";
startServer();
