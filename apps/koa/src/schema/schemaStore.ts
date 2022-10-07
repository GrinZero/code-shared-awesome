import { GraphQLObjectType as GObject } from "graphql";
import type { GraphQLFieldConfig, GraphQLObjectTypeConfig } from "graphql";

export type SchemaStoreType<T, S> = {
  add: (name: string, config: GraphQLFieldConfig<any, any>) => void;
  finish: (
    config: Readonly<Omit<GraphQLObjectTypeConfig<T, S>, "fields">>
  ) => GObject<T, S>;
  fields: Record<string, GraphQLFieldConfig<any, any, any>>;
};

export class SchemaStore<T = any, S = any> implements SchemaStoreType<T, S> {
  fields: Record<string, GraphQLFieldConfig<any, any, any>> = {};
  add(name: string, field: GraphQLFieldConfig<any, any, any>) {
    this.fields[name] = field;
  }
  finish(config: Readonly<Omit<GraphQLObjectTypeConfig<T, S>, "fields">>) {
    return new GObject({ ...config, fields: this.fields });
  }
}

export const mergeSchemaStore = (...stores: SchemaStoreType<any, any>[]) => {
  const store = new SchemaStore();
  stores.forEach((s) => {
    store.fields = { ...store.fields, ...s.fields };
  });
  return store;
};
