import { GraphQLObjectType as GObject } from "graphql";
import type { GraphQLFieldConfig, GraphQLObjectTypeConfig } from "graphql";

export class FieldStore<T = any, S = any> {
  fields: Record<string, GraphQLFieldConfig<any, any, any>> = {};
  add(name: string, field: GraphQLFieldConfig<any, any, any>) {
    this.fields[name] = field;
  }
  finish(config: Readonly<Omit<GraphQLObjectTypeConfig<T, S>, "fields">>) {
    return new GObject({ ...config, fields: this.fields });
  }
}

export const mergeFieldStore = (...stores: FieldStore<any, any>[]) => {
  const store = new FieldStore();
  stores.forEach((s) => {
    store.fields = { ...store.fields, ...s.fields };
  });
  return store;
};
