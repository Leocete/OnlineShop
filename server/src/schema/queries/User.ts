import { GraphQLList } from 'graphql'
import { UserType } from '../typeDefs/User'
import { Users } from '../../entities/Users';

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(): Promise<Users[]> {
    return Users.find();
  }
}