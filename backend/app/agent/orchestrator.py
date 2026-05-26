from app.agent.router import (
    route_query
)

def run_agent(query: str):

    result = route_query(query)

    return result