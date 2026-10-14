import "server-only";

import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = Redis.fromEnv();

export const contactRateLimit =
  new Ratelimit({
    redis,

    limiter:
      Ratelimit.slidingWindow(
        3,
        "10 m"
      ),

    analytics: true,

    prefix:
      "sound-fusion:contact",
  });