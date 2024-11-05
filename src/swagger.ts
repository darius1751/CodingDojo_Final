import { SwaggerOptions } from "swagger-ui-express";

export const swagger: SwaggerOptions = {
    swagger: "2.0",
    info: {
        description: "Este es el swagger de la api del examen, El Swagger facilitara la prueba de los endpoints de la api",
        version: "0.0.1",
        title: "Swagger API",
        contact: {
            email: "lupequi12@gmail.com"
        }
    },
    host: `localhost:${process.env.PORT || 4000}/`,
    basePath: 'api/v1/',
    schemes: [
        "http"
    ],
    paths: {
        "/user": {
            get: {
                tags: [
                    "user"
                ],
                summary: "Find all users",
                description: "Find all users in the DB",
                produces: [
                    "application/json"
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        schema: {
                            type: "array",
                            items: {
                                properties: {
                                    _id: {
                                        type: "string",
                                    },
                                    estimatedTime: {
                                        type: "integer",
                                        example: 1
                                    },
                                    description: {
                                        type: "string",
                                    },
                                    createdAt: {
                                        type: "string",
                                        format: 'timestamp'
                                    },
                                    status: {
                                        type: "string",
                                        description: "status task",
                                        enum: [
                                            "EARNNING",
                                            "IN PROGRESS",
                                            "COMPLETED"
                                        ]
                                    },
                                    updatedAt: {
                                        type: "string",
                                        format: 'timestamp'
                                    },
                                },
                            }
                        }
                    }
                }
            },
            post: {
                tags: [
                    "user"
                ],
                summary: "Create one user",
                description: "Create one user to DB",
                consumes: [
                    "application/json",
                ],
                produces: [
                    "application/json",
                ],
                parameters: [
                    {
                        in: "body",
                        name: "body",
                        description: "Pet object that needs to be added to the store",
                        required: true,
                        schema: {
                            type: "object",
                            required: [
                                "name",
                                "lastname",
                                "credentials"
                            ],
                            properties: {
                                name: {
                                    type: "string",
                                    example: "Luis"
                                },
                                lastname: {
                                    type: "string",
                                    example: "Fernando"
                                },
                                credentials: {
                                    type: "object",
                                    required: [
                                        "email",
                                        "password",
                                    ],
                                    properties: {
                                        email: {
                                            type: "string",
                                            example: "admin@admin.com"
                                        },
                                        password: {
                                            type: "string",
                                            example: "123456"
                                        },
                                    }
                                }
                            }
                        }
                    }
                ],
                responses: {
                    400: {
                        description: "Email exist in DB"
                    },
                    500: {
                        description: "Validation exception"
                    }
                }
            }
        },
        "/task/{userId}": {
            post: {
                tags: [
                    "task"
                ],
                summary: "Create one task to user",
                description: "Create one task to user by userId",
                produces: [
                    "application/json"
                ],
                parameters: [{
                    in: "body",
                    name: "body",
                    description: "Task",
                    required: true,
                    schema: {
                        type: "object",
                        required: [
                            "description",
                            "estimatedTime",
                            "deadLine"
                        ],
                        properties: {
                            description: {
                                type: "string"
                            },
                            estimatedTime: {
                                type: "integer",
                                example: 1
                            },
                            deadLine: {
                                type: "string",
                                format: "timestamp"
                            }
                        }
                    }
                },
                {
                    name: "userId",
                    in: "path",
                    description: "ID of the own Task",
                    required: true,
                    type: "string",
                }
                ],
                responses: {
                    200: {
                        description: "successful operation",
                        schema: {
                            type: "object",
                            properties: {
                                _id: {
                                    type: "string",
                                },
                                name: {
                                    type: "string",
                                    example: "Luis"
                                },
                                lastname: {
                                    type: "string",
                                    example: "Mosquera"
                                },
                                tasks: {
                                    type: "array",
                                    items: {
                                        properties: {
                                            _id: {
                                                type: "string"
                                            },
                                            description: {
                                                type: "string"
                                            },
                                            estimatedTime: {
                                                type: "integer",
                                                example: 1
                                            },
                                            deadLine: {
                                                type: "string",
                                                format: "timestamp"
                                            }
                                        }
                                    }
                                },
                                createdAt: {
                                    type: "string",
                                    format: 'timestamp'
                                },
                                updatedAt: {
                                    type: "string",
                                    format: 'timestamp'
                                },
                            },

                        }
                    }
                }
            }
        },
        "/task/{userId}/{id}": {
            put: {
                tags: [
                    "task"
                ],
                summary: "Update one task to user",
                description: "Update one task to user by userId",
                produces: [
                    "application/json"
                ],
                parameters: [
                    {
                        in: "body",
                        name: "body",
                        description: "Task",
                        required: true,
                        schema: {
                            type: "object",
                            required: [],
                            properties: {
                                description: {
                                    type: "string"
                                },
                                estimatedTime: {
                                    type: "integer",
                                    example: 1
                                },
                                deadLine: {
                                    type: "string",
                                    format: "timestamp"
                                }
                            }
                        }
                    },
                    {
                        name: "userId",
                        in: "path",
                        description: "ID of the own Task",
                        required: true,
                        type: "string",
                    },
                    {
                        name: "id",
                        in: "path",
                        description: "ID of the Task",
                        required: true,
                        type: "string",
                    }
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        schema: {
                            type: "object",
                            properties: {
                                _id: {
                                    type: "string",
                                },
                                name: {
                                    type: "string",
                                    example: "Luis"
                                },
                                lastname: {
                                    type: "string",
                                    example: "Mosquera"
                                },
                                tasks: {
                                    type: "array",
                                    items: {
                                        properties: {
                                            _id: {
                                                type: "string"
                                            },
                                            description: {
                                                type: "string"
                                            },
                                            estimatedTime: {
                                                type: "integer",
                                                example: 1
                                            },
                                            deadLine: {
                                                type: "string",
                                                format: "timestamp"
                                            }
                                        }
                                    }
                                },
                                createdAt: {
                                    type: "string",
                                    format: 'timestamp'
                                },
                                updatedAt: {
                                    type: "string",
                                    format: 'timestamp'
                                },
                            },

                        }
                    }
                }
            },
            patch: {
                tags: [
                    "task"
                ],
                summary: "Update one task to user",
                description: "Update one task to user by userId",
                produces: [
                    "application/json"
                ],
                parameters: [
                    {
                        in: "body",
                        name: "body",
                        description: "Task",
                        required: true,
                        schema: {
                            type: "object",
                            required: [],
                            properties: {
                                description: {
                                    type: "string"
                                },
                                estimatedTime: {
                                    type: "integer",
                                    example: 1
                                },
                                deadLine: {
                                    type: "string",
                                    format: "timestamp"
                                }
                            }
                        }
                    },
                    {
                        name: "userId",
                        in: "path",
                        description: "ID of the own Task",
                        required: true,
                        type: "string",
                    },
                    {
                        name: "id",
                        in: "path",
                        description: "ID of the Task",
                        required: true,
                        type: "string",
                    }
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        schema: {
                            type: "object",
                            properties: {
                                _id: {
                                    type: "string",
                                },
                                name: {
                                    type: "string",
                                    example: "Luis"
                                },
                                lastname: {
                                    type: "string",
                                    example: "Mosquera"
                                },
                                tasks: {
                                    type: "array",
                                    items: {
                                        properties: {
                                            _id: {
                                                type: "string"
                                            },
                                            description: {
                                                type: "string"
                                            },
                                            estimatedTime: {
                                                type: "integer",
                                                example: 1
                                            },
                                            deadLine: {
                                                type: "string",
                                                format: "timestamp"
                                            }
                                        }
                                    }
                                },
                                createdAt: {
                                    type: "string",
                                    format: 'timestamp'
                                },
                                updatedAt: {
                                    type: "string",
                                    format: 'timestamp'
                                },
                            },

                        }
                    }
                }
            },
            delete: {
                tags: [
                    "task"
                ],
                summary: "Delete one task to user",
                description: "Delete one task to user by userId",
                produces: [
                    "application/json"
                ],
                parameters: [
                    {
                        name: "userId",
                        in: "path",
                        description: "ID of the own Task",
                        required: true,
                        type: "string",
                    },
                    {
                        name: "id",
                        in: "path",
                        description: "ID of the Task",
                        required: true,
                        type: "string",
                    }
                ],
                responses: {
                    200: {
                        description: "successful operation",
                        schema: {
                            type: "object",
                            properties: {
                                _id: {
                                    type: "string",
                                },
                                name: {
                                    type: "string",
                                    example: "Luis"
                                },
                                lastname: {
                                    type: "string",
                                    example: "Mosquera"
                                },
                                tasks: {
                                    type: "array",
                                    items: {
                                        properties: {
                                            _id: {
                                                type: "string"
                                            },
                                            description: {
                                                type: "string"
                                            },
                                            estimatedTime: {
                                                type: "integer",
                                                example: 1
                                            },
                                            deadLine: {
                                                type: "string",
                                                format: "timestamp"
                                            }
                                        }
                                    }
                                },
                                createdAt: {
                                    type: "string",
                                    format: 'timestamp'
                                },
                                updatedAt: {
                                    type: "string",
                                    format: 'timestamp'
                                },
                            },

                        }
                    }
                }
            },
        },
        "/task/except/{userId}": {
            get: {
                tags: [
                    "task"
                ],
                summary: "Find all tasks except userId",
                description: "Find all tasks in the DB except tasks of the userId",
                produces: [
                    "application/json"
                ],
                parameters: [
                    {
                        name: "userId",
                        in: "path",
                        description: "ID of the own Tasks exclude",
                        required: true,
                        type: "string",
                    }
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        schema: {
                            type: "array",
                            items: {
                                properties: {
                                    _id: {
                                        type: "string",
                                    },
                                    estimatedTime: {
                                        type: "integer",
                                        example: 1
                                    },
                                    description: {
                                        type: "string",
                                    },
                                    createdAt: {
                                        type: "string",
                                        format: 'timestamp'
                                    },
                                    status: {
                                        type: "string",
                                        description: "status task",
                                        enum: [
                                            "EARNNING",
                                            "IN PROGRESS",
                                            "COMPLETED"
                                        ]
                                    },
                                    updatedAt: {
                                        type: "string",
                                        format: 'timestamp'
                                    },
                                },
                            }
                        }
                    }
                }
            }
        },
        "/auth/login": {
            post: {
                tags: [
                    "auth"
                ],
                summary: "Login in system",
                description: "Create login in system and use cookies",
                consumes: [
                    "application/json",
                ],
                produces: [
                    "application/json",
                ],
                parameters: [
                    {
                        in: "body",
                        name: "body",
                        description: "Pet object that needs to be added to the store",
                        required: true,
                        schema: {
                            type: "object",
                            required: [
                                "email",
                                "password",
                            ],
                            properties: {
                                email: {
                                    type: "string",
                                    example: "admin@admin.com"
                                },
                                password: {
                                    type: "string",
                                    example: "123456"
                                },

                            }
                        }
                    }
                ],
                responses: {
                    400: {
                        description: "Email exist in DB"
                    },
                    500: {
                        description: "Validation exception"
                    }
                }
            }
        },
        "/auth/logout": {
            put: {
                tags: [
                    "auth"
                ],
                summary: "Logout of system",
                description: "Clear cookies",
                responses: {
                    200: {
                        description: "success operation"
                    },
                    500: {
                        description: "Validation exception"
                    }
                }
            },
            patch: {
                tags: [
                    "auth"
                ],
                summary: "Logout of system",
                description: "Clear cookies",
                responses: {
                    200: {
                        description: "success operation"
                    },
                    500: {
                        description: "Validation exception"
                    }
                }
            }
        },
    },
    securityDefinitions: {
        token: {
            type: "apiKey",
            name: "token",
            in: "cookies"
        },
    }
}