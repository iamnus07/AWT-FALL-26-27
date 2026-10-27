export enum BloodGroup {
  A_POS = "A+",
  A_NEG = "A-",
  B_POS = "B+",
  B_NEG = "B-",
  AB_POS = "AB+",
  AB_NEG = "AB-",
  O_POS = "O+",
  O_NEG = "O-",
}

export enum UrgencyLevel {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  CRITICAL = "critical",
}

export enum RequestStatus {
  OPEN = "open",
  FULFILLED = "fulfilled",
  CANCELLED = "cancelled",
}

export enum ResponseStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  DECLINED = "declined",
  DONATED = "donated",
}
