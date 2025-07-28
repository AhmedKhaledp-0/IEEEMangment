# IEEE Management System - Technical Architecture

## Permission-Based Access Control

```mermaid
---
config:
  layout: elk
  theme: neutral
  themeVariables:
    darkMode: true
---
graph TD
    A[User Login] --> B{Authentication}
    B --> |Success| C[Get User Role]
    B --> |Failure| D[Access Denied]

    C --> E{Role Check}

    E --> |Normal Member| F[Normal Permissions]
    E --> |HR Member| G[HR Permissions]
    E --> |Head Member| H[Head Permissions]
    E --> |High Board| I[High Board Permissions]

    F --> F1[✓ View Profile]
    F --> F2[✓ View Assignments]
    F --> F3[✓ View Committee]
    F --> F4[✓ View Best Members]
    F --> F5[✗ Rate Others]
    F --> F6[✗ Add Members]
    F --> F7[✗ Create Tasks]
    F --> F8[✗ Manage Committees]

    G --> G1[✓ All Normal Permissions]
    G --> G2[✓ Rate Attendance]
    G --> G3[✓ Add Behaviors]
    G --> G4[✓ View Committee Members]
    G --> G5[✗ Rate Assignments]
    G --> G6[✗ Add Members]
    G --> G7[✗ Create Committees]

    H --> H1[✓ All HR Permissions]
    H --> H2[✓ Rate Assignments]
    H --> H3[✓ Add New Members]
    H --> H4[✓ Assign Tasks]
    H --> H5[✓ Create Posts]
    H --> H6[✓ Make Meeting Agendas]
    H --> H7[✗ Manage All Committees]
    H --> H8[✗ Create Committees]

    I --> I1[✓ All Head Permissions]
    I --> I2[✓ View All Committees]
    I --> I3[✓ Create General Agendas]
    I --> I4[✓ Manage Events]
    I --> I5[✓ Add New Committees]
    I --> I6[✓ Rate Leadership]

    style A fill:#ffcdd2
    style F fill:#e8f5e8
    style G fill:#fff3e0
    style H fill:#f3e5f5
    style I fill:#e1f5fe
```

## Data Flow Architecture

```mermaid
---
config:
  layout: elk
  theme: dark
  themeVariables:
    darkMode: true
---
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as Auth Service
    participant P as Permission Service
    participant D as Database

    U->>F: Login Request
    F->>A: Authenticate User
    A->>D: Verify Credentials
    D-->>A: User Data + Role
    A-->>F: Authentication Token
    F->>P: Check Permissions
    P->>D: Get Role Permissions
    D-->>P: Permission Matrix
    P-->>F: Allowed Actions
    F-->>U: Dashboard with Role-based UI

    Note over U,D: Subsequent Requests
    U->>F: Request Action
    F->>P: Validate Permission
    alt Permission Granted
        P-->>F: Allow
        F->>D: Execute Action
        D-->>F: Result
        F-->>U: Success Response
    else Permission Denied
        P-->>F: Deny
        F-->>U: Access Denied
    end
```
