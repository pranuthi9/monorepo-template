import { Resource } from "sst";
import { Example } from "@time-capsule/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
