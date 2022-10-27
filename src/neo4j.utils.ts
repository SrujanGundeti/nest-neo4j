import neo4j from 'neo4j-driver'
import { Neo4jConfig } from './interfaces/neo4j-config.interface'

export const createDriver = async (config: Neo4jConfig) => {
    const { options, scheme, host, port, username, password } = config;
    const driver = neo4j.driver(
        `${scheme}://${host}:${port}`,
        neo4j.auth.basic(username, password),
        options
    )

    await driver.verifyConnectivity()

    return driver
}