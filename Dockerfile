FROM hasura/graphql-engine:v2.0.11
CMD graphql-engine \
    serve \
    --database-url postgres://food_planner_user:PMMAFhVMj0J15LmN1tyZtWhaSTXiEK5b@dpg-cj9qq09duelc73djoju0-a:5432/food_planner
