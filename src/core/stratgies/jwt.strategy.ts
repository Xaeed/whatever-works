import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_SECRET } from '../../configs/index';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
   
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET.secret
    });
  }

  validate(payload: any) {
    return payload;
  }
}