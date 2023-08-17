export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _neq?: InputMaybe<Scalars['Float']['input']>;
  _nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "ingredients" */
export type Ingredients = {
  __typename?: 'ingredients';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "ingredients" */
export type Ingredients_Aggregate = {
  __typename?: 'ingredients_aggregate';
  aggregate?: Maybe<Ingredients_Aggregate_Fields>;
  nodes: Array<Ingredients>;
};

/** aggregate fields of "ingredients" */
export type Ingredients_Aggregate_Fields = {
  __typename?: 'ingredients_aggregate_fields';
  avg?: Maybe<Ingredients_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ingredients_Max_Fields>;
  min?: Maybe<Ingredients_Min_Fields>;
  stddev?: Maybe<Ingredients_Stddev_Fields>;
  stddev_pop?: Maybe<Ingredients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ingredients_Stddev_Samp_Fields>;
  sum?: Maybe<Ingredients_Sum_Fields>;
  var_pop?: Maybe<Ingredients_Var_Pop_Fields>;
  var_samp?: Maybe<Ingredients_Var_Samp_Fields>;
  variance?: Maybe<Ingredients_Variance_Fields>;
};


/** aggregate fields of "ingredients" */
export type Ingredients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ingredients_Avg_Fields = {
  __typename?: 'ingredients_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ingredients". All fields are combined with a logical 'AND'. */
export type Ingredients_Bool_Exp = {
  _and?: InputMaybe<Array<Ingredients_Bool_Exp>>;
  _not?: InputMaybe<Ingredients_Bool_Exp>;
  _or?: InputMaybe<Array<Ingredients_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ingredients" */
export enum Ingredients_Constraint {
  /** unique or primary key constraint on columns "name" */
  IngredientsNameKey = 'ingredients_name_key',
  /** unique or primary key constraint on columns "id" */
  IngredientsPkey = 'ingredients_pkey'
}

/** input type for incrementing numeric columns in table "ingredients" */
export type Ingredients_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ingredients" */
export type Ingredients_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Ingredients_Max_Fields = {
  __typename?: 'ingredients_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Ingredients_Min_Fields = {
  __typename?: 'ingredients_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "ingredients" */
export type Ingredients_Mutation_Response = {
  __typename?: 'ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ingredients>;
};

/** input type for inserting object relation for remote table "ingredients" */
export type Ingredients_Obj_Rel_Insert_Input = {
  data: Ingredients_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};

/** on_conflict condition type for table "ingredients" */
export type Ingredients_On_Conflict = {
  constraint: Ingredients_Constraint;
  update_columns?: Array<Ingredients_Update_Column>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

/** Ordering options when selecting data from "ingredients". */
export type Ingredients_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ingredients */
export type Ingredients_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "ingredients" */
export enum Ingredients_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit'
}

/** input type for updating data in table "ingredients" */
export type Ingredients_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Ingredients_Stddev_Fields = {
  __typename?: 'ingredients_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ingredients_Stddev_Pop_Fields = {
  __typename?: 'ingredients_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ingredients_Stddev_Samp_Fields = {
  __typename?: 'ingredients_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ingredients" */
export type Ingredients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ingredients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ingredients_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Ingredients_Sum_Fields = {
  __typename?: 'ingredients_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "ingredients" */
export enum Ingredients_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit'
}

export type Ingredients_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ingredients_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ingredients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ingredients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ingredients_Var_Pop_Fields = {
  __typename?: 'ingredients_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ingredients_Var_Samp_Fields = {
  __typename?: 'ingredients_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ingredients_Variance_Fields = {
  __typename?: 'ingredients_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "instructions" */
export type Instructions = {
  __typename?: 'instructions';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  recipe_id: Scalars['Int']['output'];
  step_number: Scalars['Int']['output'];
};

/** aggregated selection of "instructions" */
export type Instructions_Aggregate = {
  __typename?: 'instructions_aggregate';
  aggregate?: Maybe<Instructions_Aggregate_Fields>;
  nodes: Array<Instructions>;
};

export type Instructions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Instructions_Aggregate_Bool_Exp_Count>;
};

export type Instructions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Instructions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Instructions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "instructions" */
export type Instructions_Aggregate_Fields = {
  __typename?: 'instructions_aggregate_fields';
  avg?: Maybe<Instructions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Instructions_Max_Fields>;
  min?: Maybe<Instructions_Min_Fields>;
  stddev?: Maybe<Instructions_Stddev_Fields>;
  stddev_pop?: Maybe<Instructions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Instructions_Stddev_Samp_Fields>;
  sum?: Maybe<Instructions_Sum_Fields>;
  var_pop?: Maybe<Instructions_Var_Pop_Fields>;
  var_samp?: Maybe<Instructions_Var_Samp_Fields>;
  variance?: Maybe<Instructions_Variance_Fields>;
};


/** aggregate fields of "instructions" */
export type Instructions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Instructions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "instructions" */
export type Instructions_Aggregate_Order_By = {
  avg?: InputMaybe<Instructions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Instructions_Max_Order_By>;
  min?: InputMaybe<Instructions_Min_Order_By>;
  stddev?: InputMaybe<Instructions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Instructions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Instructions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Instructions_Sum_Order_By>;
  var_pop?: InputMaybe<Instructions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Instructions_Var_Samp_Order_By>;
  variance?: InputMaybe<Instructions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "instructions" */
export type Instructions_Arr_Rel_Insert_Input = {
  data: Array<Instructions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Instructions_On_Conflict>;
};

/** aggregate avg on columns */
export type Instructions_Avg_Fields = {
  __typename?: 'instructions_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
  step_number?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "instructions" */
export type Instructions_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "instructions". All fields are combined with a logical 'AND'. */
export type Instructions_Bool_Exp = {
  _and?: InputMaybe<Array<Instructions_Bool_Exp>>;
  _not?: InputMaybe<Instructions_Bool_Exp>;
  _or?: InputMaybe<Array<Instructions_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  recipe_id?: InputMaybe<Int_Comparison_Exp>;
  step_number?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "instructions" */
export enum Instructions_Constraint {
  /** unique or primary key constraint on columns "id" */
  InstructionsPkey = 'instructions_pkey',
  /** unique or primary key constraint on columns "recipe_id", "step_number" */
  InstructionsRecipeIdStepNumberKey = 'instructions_recipe_id_step_number_key'
}

/** input type for incrementing numeric columns in table "instructions" */
export type Instructions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  step_number?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "instructions" */
export type Instructions_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  step_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Instructions_Max_Fields = {
  __typename?: 'instructions_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  recipe_id?: Maybe<Scalars['Int']['output']>;
  step_number?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "instructions" */
export type Instructions_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Instructions_Min_Fields = {
  __typename?: 'instructions_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  recipe_id?: Maybe<Scalars['Int']['output']>;
  step_number?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "instructions" */
export type Instructions_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "instructions" */
export type Instructions_Mutation_Response = {
  __typename?: 'instructions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Instructions>;
};

/** on_conflict condition type for table "instructions" */
export type Instructions_On_Conflict = {
  constraint: Instructions_Constraint;
  update_columns?: Array<Instructions_Update_Column>;
  where?: InputMaybe<Instructions_Bool_Exp>;
};

/** Ordering options when selecting data from "instructions". */
export type Instructions_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: instructions */
export type Instructions_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "instructions" */
export enum Instructions_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  StepNumber = 'step_number'
}

/** input type for updating data in table "instructions" */
export type Instructions_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  step_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Instructions_Stddev_Fields = {
  __typename?: 'instructions_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
  step_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "instructions" */
export type Instructions_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Instructions_Stddev_Pop_Fields = {
  __typename?: 'instructions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
  step_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "instructions" */
export type Instructions_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Instructions_Stddev_Samp_Fields = {
  __typename?: 'instructions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
  step_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "instructions" */
export type Instructions_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "instructions" */
export type Instructions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Instructions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Instructions_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  step_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Instructions_Sum_Fields = {
  __typename?: 'instructions_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  recipe_id?: Maybe<Scalars['Int']['output']>;
  step_number?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "instructions" */
export type Instructions_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** update columns of table "instructions" */
export enum Instructions_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  StepNumber = 'step_number'
}

export type Instructions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Instructions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Instructions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Instructions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Instructions_Var_Pop_Fields = {
  __typename?: 'instructions_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
  step_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "instructions" */
export type Instructions_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Instructions_Var_Samp_Fields = {
  __typename?: 'instructions_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
  step_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "instructions" */
export type Instructions_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Instructions_Variance_Fields = {
  __typename?: 'instructions_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
  step_number?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "instructions" */
export type Instructions_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  step_number?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "ingredients" */
  delete_ingredients?: Maybe<Ingredients_Mutation_Response>;
  /** delete single row from the table: "ingredients" */
  delete_ingredients_by_pk?: Maybe<Ingredients>;
  /** delete data from the table: "instructions" */
  delete_instructions?: Maybe<Instructions_Mutation_Response>;
  /** delete single row from the table: "instructions" */
  delete_instructions_by_pk?: Maybe<Instructions>;
  /** delete data from the table: "recipe_ingredients" */
  delete_recipe_ingredients?: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** delete single row from the table: "recipe_ingredients" */
  delete_recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** delete data from the table: "recipes" */
  delete_recipes?: Maybe<Recipes_Mutation_Response>;
  /** delete single row from the table: "recipes" */
  delete_recipes_by_pk?: Maybe<Recipes>;
  /** insert data into the table: "ingredients" */
  insert_ingredients?: Maybe<Ingredients_Mutation_Response>;
  /** insert a single row into the table: "ingredients" */
  insert_ingredients_one?: Maybe<Ingredients>;
  /** insert data into the table: "instructions" */
  insert_instructions?: Maybe<Instructions_Mutation_Response>;
  /** insert a single row into the table: "instructions" */
  insert_instructions_one?: Maybe<Instructions>;
  /** insert data into the table: "recipe_ingredients" */
  insert_recipe_ingredients?: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** insert a single row into the table: "recipe_ingredients" */
  insert_recipe_ingredients_one?: Maybe<Recipe_Ingredients>;
  /** insert data into the table: "recipes" */
  insert_recipes?: Maybe<Recipes_Mutation_Response>;
  /** insert a single row into the table: "recipes" */
  insert_recipes_one?: Maybe<Recipes>;
  /** update data of the table: "ingredients" */
  update_ingredients?: Maybe<Ingredients_Mutation_Response>;
  /** update single row of the table: "ingredients" */
  update_ingredients_by_pk?: Maybe<Ingredients>;
  /** update multiples rows of table: "ingredients" */
  update_ingredients_many?: Maybe<Array<Maybe<Ingredients_Mutation_Response>>>;
  /** update data of the table: "instructions" */
  update_instructions?: Maybe<Instructions_Mutation_Response>;
  /** update single row of the table: "instructions" */
  update_instructions_by_pk?: Maybe<Instructions>;
  /** update multiples rows of table: "instructions" */
  update_instructions_many?: Maybe<Array<Maybe<Instructions_Mutation_Response>>>;
  /** update data of the table: "recipe_ingredients" */
  update_recipe_ingredients?: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** update single row of the table: "recipe_ingredients" */
  update_recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** update multiples rows of table: "recipe_ingredients" */
  update_recipe_ingredients_many?: Maybe<Array<Maybe<Recipe_Ingredients_Mutation_Response>>>;
  /** update data of the table: "recipes" */
  update_recipes?: Maybe<Recipes_Mutation_Response>;
  /** update single row of the table: "recipes" */
  update_recipes_by_pk?: Maybe<Recipes>;
  /** update multiples rows of table: "recipes" */
  update_recipes_many?: Maybe<Array<Maybe<Recipes_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_IngredientsArgs = {
  where: Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ingredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_InstructionsArgs = {
  where: Instructions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Instructions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Recipe_IngredientsArgs = {
  where: Recipe_Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_Ingredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RecipesArgs = {
  where: Recipes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_IngredientsArgs = {
  objects: Array<Ingredients_Insert_Input>;
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ingredients_OneArgs = {
  object: Ingredients_Insert_Input;
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InstructionsArgs = {
  objects: Array<Instructions_Insert_Input>;
  on_conflict?: InputMaybe<Instructions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Instructions_OneArgs = {
  object: Instructions_Insert_Input;
  on_conflict?: InputMaybe<Instructions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_IngredientsArgs = {
  objects: Array<Recipe_Ingredients_Insert_Input>;
  on_conflict?: InputMaybe<Recipe_Ingredients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_Ingredients_OneArgs = {
  object: Recipe_Ingredients_Insert_Input;
  on_conflict?: InputMaybe<Recipe_Ingredients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RecipesArgs = {
  objects: Array<Recipes_Insert_Input>;
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipes_OneArgs = {
  object: Recipes_Insert_Input;
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_IngredientsArgs = {
  _inc?: InputMaybe<Ingredients_Inc_Input>;
  _set?: InputMaybe<Ingredients_Set_Input>;
  where: Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ingredients_By_PkArgs = {
  _inc?: InputMaybe<Ingredients_Inc_Input>;
  _set?: InputMaybe<Ingredients_Set_Input>;
  pk_columns: Ingredients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ingredients_ManyArgs = {
  updates: Array<Ingredients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InstructionsArgs = {
  _inc?: InputMaybe<Instructions_Inc_Input>;
  _set?: InputMaybe<Instructions_Set_Input>;
  where: Instructions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Instructions_By_PkArgs = {
  _inc?: InputMaybe<Instructions_Inc_Input>;
  _set?: InputMaybe<Instructions_Set_Input>;
  pk_columns: Instructions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Instructions_ManyArgs = {
  updates: Array<Instructions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_IngredientsArgs = {
  _inc?: InputMaybe<Recipe_Ingredients_Inc_Input>;
  _set?: InputMaybe<Recipe_Ingredients_Set_Input>;
  where: Recipe_Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Ingredients_By_PkArgs = {
  _inc?: InputMaybe<Recipe_Ingredients_Inc_Input>;
  _set?: InputMaybe<Recipe_Ingredients_Set_Input>;
  pk_columns: Recipe_Ingredients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Ingredients_ManyArgs = {
  updates: Array<Recipe_Ingredients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RecipesArgs = {
  _inc?: InputMaybe<Recipes_Inc_Input>;
  _set?: InputMaybe<Recipes_Set_Input>;
  where: Recipes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipes_By_PkArgs = {
  _inc?: InputMaybe<Recipes_Inc_Input>;
  _set?: InputMaybe<Recipes_Set_Input>;
  pk_columns: Recipes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recipes_ManyArgs = {
  updates: Array<Recipes_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ingredients" */
  ingredients: Array<Ingredients>;
  /** fetch aggregated fields from the table: "ingredients" */
  ingredients_aggregate: Ingredients_Aggregate;
  /** fetch data from the table: "ingredients" using primary key columns */
  ingredients_by_pk?: Maybe<Ingredients>;
  /** fetch data from the table: "instructions" */
  instructions: Array<Instructions>;
  /** fetch aggregated fields from the table: "instructions" */
  instructions_aggregate: Instructions_Aggregate;
  /** fetch data from the table: "instructions" using primary key columns */
  instructions_by_pk?: Maybe<Instructions>;
  /** fetch data from the table: "recipe_ingredients" */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** fetch aggregated fields from the table: "recipe_ingredients" */
  recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
  /** fetch data from the table: "recipe_ingredients" using primary key columns */
  recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** fetch data from the table: "recipes" */
  recipes: Array<Recipes>;
  /** fetch aggregated fields from the table: "recipes" */
  recipes_aggregate: Recipes_Aggregate;
  /** fetch data from the table: "recipes" using primary key columns */
  recipes_by_pk?: Maybe<Recipes>;
};


export type Query_RootIngredientsArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Query_RootIngredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Query_RootIngredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootInstructionsArgs = {
  distinct_on?: InputMaybe<Array<Instructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Instructions_Order_By>>;
  where?: InputMaybe<Instructions_Bool_Exp>;
};


export type Query_RootInstructions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Instructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Instructions_Order_By>>;
  where?: InputMaybe<Instructions_Bool_Exp>;
};


export type Query_RootInstructions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRecipe_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};


export type Query_RootRecipe_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};


export type Query_RootRecipe_Ingredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRecipesArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Query_RootRecipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Query_RootRecipes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "recipe_ingredients" */
export type Recipe_Ingredients = {
  __typename?: 'recipe_ingredients';
  id: Scalars['Int']['output'];
  ingredient_id: Scalars['Int']['output'];
  quantity: Scalars['Float']['output'];
  recipe_id: Scalars['Int']['output'];
  /** An object relationship */
  recipe_ingredients_ingredient: Ingredients;
  /** An object relationship */
  recipe_ingredients_recipe: Recipes;
};

/** aggregated selection of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate = {
  __typename?: 'recipe_ingredients_aggregate';
  aggregate?: Maybe<Recipe_Ingredients_Aggregate_Fields>;
  nodes: Array<Recipe_Ingredients>;
};

export type Recipe_Ingredients_Aggregate_Bool_Exp = {
  count?: InputMaybe<Recipe_Ingredients_Aggregate_Bool_Exp_Count>;
};

export type Recipe_Ingredients_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_Fields = {
  __typename?: 'recipe_ingredients_aggregate_fields';
  avg?: Maybe<Recipe_Ingredients_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Recipe_Ingredients_Max_Fields>;
  min?: Maybe<Recipe_Ingredients_Min_Fields>;
  stddev?: Maybe<Recipe_Ingredients_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Ingredients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Ingredients_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Ingredients_Sum_Fields>;
  var_pop?: Maybe<Recipe_Ingredients_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Ingredients_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Ingredients_Variance_Fields>;
};


/** aggregate fields of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_Order_By = {
  avg?: InputMaybe<Recipe_Ingredients_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recipe_Ingredients_Max_Order_By>;
  min?: InputMaybe<Recipe_Ingredients_Min_Order_By>;
  stddev?: InputMaybe<Recipe_Ingredients_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Recipe_Ingredients_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Recipe_Ingredients_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Recipe_Ingredients_Sum_Order_By>;
  var_pop?: InputMaybe<Recipe_Ingredients_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Recipe_Ingredients_Var_Samp_Order_By>;
  variance?: InputMaybe<Recipe_Ingredients_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe_ingredients" */
export type Recipe_Ingredients_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Ingredients_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recipe_Ingredients_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Ingredients_Avg_Fields = {
  __typename?: 'recipe_ingredients_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe_ingredients". All fields are combined with a logical 'AND'. */
export type Recipe_Ingredients_Bool_Exp = {
  _and?: InputMaybe<Array<Recipe_Ingredients_Bool_Exp>>;
  _not?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
  _or?: InputMaybe<Array<Recipe_Ingredients_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ingredient_id?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Float_Comparison_Exp>;
  recipe_id?: InputMaybe<Int_Comparison_Exp>;
  recipe_ingredients_ingredient?: InputMaybe<Ingredients_Bool_Exp>;
  recipe_ingredients_recipe?: InputMaybe<Recipes_Bool_Exp>;
};

/** unique or primary key constraints on table "recipe_ingredients" */
export enum Recipe_Ingredients_Constraint {
  /** unique or primary key constraint on columns "id" */
  RecipeIngredientsPkey = 'recipe_ingredients_pkey'
}

/** input type for incrementing numeric columns in table "recipe_ingredients" */
export type Recipe_Ingredients_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient_id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "recipe_ingredients" */
export type Recipe_Ingredients_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient_id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  recipe_ingredients_ingredient?: InputMaybe<Ingredients_Obj_Rel_Insert_Input>;
  recipe_ingredients_recipe?: InputMaybe<Recipes_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Recipe_Ingredients_Max_Fields = {
  __typename?: 'recipe_ingredients_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  ingredient_id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Ingredients_Min_Fields = {
  __typename?: 'recipe_ingredients_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  ingredient_id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recipe_ingredients" */
export type Recipe_Ingredients_Mutation_Response = {
  __typename?: 'recipe_ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recipe_Ingredients>;
};

/** on_conflict condition type for table "recipe_ingredients" */
export type Recipe_Ingredients_On_Conflict = {
  constraint: Recipe_Ingredients_Constraint;
  update_columns?: Array<Recipe_Ingredients_Update_Column>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

/** Ordering options when selecting data from "recipe_ingredients". */
export type Recipe_Ingredients_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  recipe_ingredients_ingredient?: InputMaybe<Ingredients_Order_By>;
  recipe_ingredients_recipe?: InputMaybe<Recipes_Order_By>;
};

/** primary key columns input for table: recipe_ingredients */
export type Recipe_Ingredients_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "recipe_ingredients" */
export enum Recipe_Ingredients_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IngredientId = 'ingredient_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RecipeId = 'recipe_id'
}

/** input type for updating data in table "recipe_ingredients" */
export type Recipe_Ingredients_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient_id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Recipe_Ingredients_Stddev_Fields = {
  __typename?: 'recipe_ingredients_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Ingredients_Stddev_Pop_Fields = {
  __typename?: 'recipe_ingredients_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Ingredients_Stddev_Samp_Fields = {
  __typename?: 'recipe_ingredients_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "recipe_ingredients" */
export type Recipe_Ingredients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recipe_Ingredients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recipe_Ingredients_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient_id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Recipe_Ingredients_Sum_Fields = {
  __typename?: 'recipe_ingredients_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  ingredient_id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** update columns of table "recipe_ingredients" */
export enum Recipe_Ingredients_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IngredientId = 'ingredient_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RecipeId = 'recipe_id'
}

export type Recipe_Ingredients_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recipe_Ingredients_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recipe_Ingredients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recipe_Ingredients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recipe_Ingredients_Var_Pop_Fields = {
  __typename?: 'recipe_ingredients_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Ingredients_Var_Samp_Fields = {
  __typename?: 'recipe_ingredients_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Ingredients_Variance_Fields = {
  __typename?: 'recipe_ingredients_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  ingredient_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  recipe_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "recipes" */
export type Recipes = {
  __typename?: 'recipes';
  cooking_time: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  recipes_instructions: Array<Instructions>;
  /** An aggregate relationship */
  recipes_instructions_aggregate: Instructions_Aggregate;
  /** An array relationship */
  recipes_recipe_ingredients: Array<Recipe_Ingredients>;
  /** An aggregate relationship */
  recipes_recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
};


/** columns and relationships of "recipes" */
export type RecipesRecipes_InstructionsArgs = {
  distinct_on?: InputMaybe<Array<Instructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Instructions_Order_By>>;
  where?: InputMaybe<Instructions_Bool_Exp>;
};


/** columns and relationships of "recipes" */
export type RecipesRecipes_Instructions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Instructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Instructions_Order_By>>;
  where?: InputMaybe<Instructions_Bool_Exp>;
};


/** columns and relationships of "recipes" */
export type RecipesRecipes_Recipe_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};


/** columns and relationships of "recipes" */
export type RecipesRecipes_Recipe_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

/** aggregated selection of "recipes" */
export type Recipes_Aggregate = {
  __typename?: 'recipes_aggregate';
  aggregate?: Maybe<Recipes_Aggregate_Fields>;
  nodes: Array<Recipes>;
};

/** aggregate fields of "recipes" */
export type Recipes_Aggregate_Fields = {
  __typename?: 'recipes_aggregate_fields';
  avg?: Maybe<Recipes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Recipes_Max_Fields>;
  min?: Maybe<Recipes_Min_Fields>;
  stddev?: Maybe<Recipes_Stddev_Fields>;
  stddev_pop?: Maybe<Recipes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipes_Stddev_Samp_Fields>;
  sum?: Maybe<Recipes_Sum_Fields>;
  var_pop?: Maybe<Recipes_Var_Pop_Fields>;
  var_samp?: Maybe<Recipes_Var_Samp_Fields>;
  variance?: Maybe<Recipes_Variance_Fields>;
};


/** aggregate fields of "recipes" */
export type Recipes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recipes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Recipes_Avg_Fields = {
  __typename?: 'recipes_avg_fields';
  cooking_time?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "recipes". All fields are combined with a logical 'AND'. */
export type Recipes_Bool_Exp = {
  _and?: InputMaybe<Array<Recipes_Bool_Exp>>;
  _not?: InputMaybe<Recipes_Bool_Exp>;
  _or?: InputMaybe<Array<Recipes_Bool_Exp>>;
  cooking_time?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recipes_instructions?: InputMaybe<Instructions_Bool_Exp>;
  recipes_instructions_aggregate?: InputMaybe<Instructions_Aggregate_Bool_Exp>;
  recipes_recipe_ingredients?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
  recipes_recipe_ingredients_aggregate?: InputMaybe<Recipe_Ingredients_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "recipes" */
export enum Recipes_Constraint {
  /** unique or primary key constraint on columns "id" */
  RecipesPkey = 'recipes_pkey'
}

/** input type for incrementing numeric columns in table "recipes" */
export type Recipes_Inc_Input = {
  cooking_time?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "recipes" */
export type Recipes_Insert_Input = {
  cooking_time?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes_instructions?: InputMaybe<Instructions_Arr_Rel_Insert_Input>;
  recipes_recipe_ingredients?: InputMaybe<Recipe_Ingredients_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Recipes_Max_Fields = {
  __typename?: 'recipes_max_fields';
  cooking_time?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Recipes_Min_Fields = {
  __typename?: 'recipes_min_fields';
  cooking_time?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "recipes" */
export type Recipes_Mutation_Response = {
  __typename?: 'recipes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recipes>;
};

/** input type for inserting object relation for remote table "recipes" */
export type Recipes_Obj_Rel_Insert_Input = {
  data: Recipes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};

/** on_conflict condition type for table "recipes" */
export type Recipes_On_Conflict = {
  constraint: Recipes_Constraint;
  update_columns?: Array<Recipes_Update_Column>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

/** Ordering options when selecting data from "recipes". */
export type Recipes_Order_By = {
  cooking_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  recipes_instructions_aggregate?: InputMaybe<Instructions_Aggregate_Order_By>;
  recipes_recipe_ingredients_aggregate?: InputMaybe<Recipe_Ingredients_Aggregate_Order_By>;
};

/** primary key columns input for table: recipes */
export type Recipes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "recipes" */
export enum Recipes_Select_Column {
  /** column name */
  CookingTime = 'cooking_time',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "recipes" */
export type Recipes_Set_Input = {
  cooking_time?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Recipes_Stddev_Fields = {
  __typename?: 'recipes_stddev_fields';
  cooking_time?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Recipes_Stddev_Pop_Fields = {
  __typename?: 'recipes_stddev_pop_fields';
  cooking_time?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Recipes_Stddev_Samp_Fields = {
  __typename?: 'recipes_stddev_samp_fields';
  cooking_time?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "recipes" */
export type Recipes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recipes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recipes_Stream_Cursor_Value_Input = {
  cooking_time?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Recipes_Sum_Fields = {
  __typename?: 'recipes_sum_fields';
  cooking_time?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "recipes" */
export enum Recipes_Update_Column {
  /** column name */
  CookingTime = 'cooking_time',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name'
}

export type Recipes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recipes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recipes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recipes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recipes_Var_Pop_Fields = {
  __typename?: 'recipes_var_pop_fields';
  cooking_time?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Recipes_Var_Samp_Fields = {
  __typename?: 'recipes_var_samp_fields';
  cooking_time?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Recipes_Variance_Fields = {
  __typename?: 'recipes_variance_fields';
  cooking_time?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "ingredients" */
  ingredients: Array<Ingredients>;
  /** fetch aggregated fields from the table: "ingredients" */
  ingredients_aggregate: Ingredients_Aggregate;
  /** fetch data from the table: "ingredients" using primary key columns */
  ingredients_by_pk?: Maybe<Ingredients>;
  /** fetch data from the table in a streaming manner: "ingredients" */
  ingredients_stream: Array<Ingredients>;
  /** fetch data from the table: "instructions" */
  instructions: Array<Instructions>;
  /** fetch aggregated fields from the table: "instructions" */
  instructions_aggregate: Instructions_Aggregate;
  /** fetch data from the table: "instructions" using primary key columns */
  instructions_by_pk?: Maybe<Instructions>;
  /** fetch data from the table in a streaming manner: "instructions" */
  instructions_stream: Array<Instructions>;
  /** fetch data from the table: "recipe_ingredients" */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** fetch aggregated fields from the table: "recipe_ingredients" */
  recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
  /** fetch data from the table: "recipe_ingredients" using primary key columns */
  recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** fetch data from the table in a streaming manner: "recipe_ingredients" */
  recipe_ingredients_stream: Array<Recipe_Ingredients>;
  /** fetch data from the table: "recipes" */
  recipes: Array<Recipes>;
  /** fetch aggregated fields from the table: "recipes" */
  recipes_aggregate: Recipes_Aggregate;
  /** fetch data from the table: "recipes" using primary key columns */
  recipes_by_pk?: Maybe<Recipes>;
  /** fetch data from the table in a streaming manner: "recipes" */
  recipes_stream: Array<Recipes>;
};


export type Subscription_RootIngredientsArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Subscription_RootIngredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Subscription_RootIngredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootIngredients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ingredients_Stream_Cursor_Input>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Subscription_RootInstructionsArgs = {
  distinct_on?: InputMaybe<Array<Instructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Instructions_Order_By>>;
  where?: InputMaybe<Instructions_Bool_Exp>;
};


export type Subscription_RootInstructions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Instructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Instructions_Order_By>>;
  where?: InputMaybe<Instructions_Bool_Exp>;
};


export type Subscription_RootInstructions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootInstructions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Instructions_Stream_Cursor_Input>>;
  where?: InputMaybe<Instructions_Bool_Exp>;
};


export type Subscription_RootRecipe_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};


export type Subscription_RootRecipe_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};


export type Subscription_RootRecipe_Ingredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRecipe_Ingredients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recipe_Ingredients_Stream_Cursor_Input>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};


export type Subscription_RootRecipesArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Subscription_RootRecipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Subscription_RootRecipes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRecipes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recipes_Stream_Cursor_Input>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

export type AddIngredientMutationVariables = Exact<{
  name: Scalars['String']['input'];
  unit?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddIngredientMutation = { __typename?: 'mutation_root', insert_ingredients_one?: { __typename?: 'ingredients', id: number, name: string, unit?: string | null } | null };

export type DeleteIngredientMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteIngredientMutation = { __typename?: 'mutation_root', delete_ingredients?: { __typename?: 'ingredients_mutation_response', affected_rows: number } | null };

export type DeleteRecipeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteRecipeMutation = { __typename?: 'mutation_root', delete_recipes_by_pk?: { __typename?: 'recipes', id: number } | null };

export type EditIngredientMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  unit?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditIngredientMutation = { __typename?: 'mutation_root', update_ingredients_by_pk?: { __typename?: 'ingredients', id: number } | null };

export type GetAllRecipeDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRecipeDetailsQuery = { __typename?: 'query_root', recipes: Array<{ __typename?: 'recipes', id: number, name: string, cooking_time: number, recipes_recipe_ingredients: Array<{ __typename?: 'recipe_ingredients', quantity: number, recipe_ingredients_ingredient: { __typename?: 'ingredients', id: number, name: string, unit?: string | null } }>, recipes_instructions: Array<{ __typename?: 'instructions', step_number: number, description: string }> }> };

export type GetIngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIngredientsQuery = { __typename?: 'query_root', ingredients: Array<{ __typename?: 'ingredients', id: number, name: string, unit?: string | null }> };

export type GetRecipeDetailsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetRecipeDetailsQuery = { __typename?: 'query_root', recipes_by_pk?: { __typename?: 'recipes', id: number, name: string, cooking_time: number, recipes_recipe_ingredients: Array<{ __typename?: 'recipe_ingredients', quantity: number, recipe_ingredients_ingredient: { __typename?: 'ingredients', id: number, name: string, unit?: string | null } }>, recipes_instructions: Array<{ __typename?: 'instructions', step_number: number, description: string }> } | null };

export type GetRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecipesQuery = { __typename?: 'query_root', recipes: Array<{ __typename?: 'recipes', id: number, name: string, cooking_time: number }> };
