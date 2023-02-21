// User Infos
export interface UserInfos {
    score: number,
    counts: {
        calorieCount: number
        proteinCount: number
        carbohydrateCount: number
        lipidCount: number
    }
}

// Performance
export interface UserPerformance {
    userId: number,
    kind: {
        1: PerformanceKind,
        2: PerformanceKind,
        3: PerformanceKind,
        4: PerformanceKind,
        5: PerformanceKind,
        6: PerformanceKind,
    },
    data: PerformanceValue[]
}

export interface PerformanceValue {
    value: number,
    kind: number
}

type PerformanceKind = 'cardio' | 'energy' | 'endurance' | 'strength' | 'speed' | 'intensity';

export enum Kind {
    intensity = 'Intensité',
    speed = 'Vitesse',
    strength = 'Force',
    endurance = 'Endurance',
    energy = 'Energie',
    cardio = 'Cardio',
}

// Activity

export interface UserActivity {
    userId: number,
    sessions : UserSession[]
}

export interface UserSession {
    day: string,
    kilogram: number,
    calories: number
}