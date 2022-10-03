import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { jwtKey } from "src/config/jwt";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtKey.secret,
    });
  }
  // Passport会自动verify jwt，如果key不正确，或是相关信息

  async validate(payload: any) {
    console.log("jwt验证! step4");
    return {
      id: payload.id,
      account: payload.account,
    };
  }
}
