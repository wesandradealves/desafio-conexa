import { ReactNode } from "react"

export enum EHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

interface AttendantTypo {
    time?: number
    price?: number
}

interface ActivityTypo {
    name?: string | undefined
    description?: string | undefined
}

interface AdressTypo {
    street?: string | undefined
    city?: string | undefined
    state?: string | undefined
    zip?: string | undefined
    country?: string | undefined    
}

interface DatesTypo {
    date?: string | undefined
}

interface TestimonialsTypo {
    id?: string | undefined
    name?: string | undefined
    company?: string | undefined
    testimonial?: string | undefined
    rating?: number
}

export interface ProfessionalsTypo {
    data?: any
    id?: number
    description?: string | undefined
    profile?: string | undefined
    company?: string | undefined
    name?: string | undefined 
    phone?: string | undefined
    email?: string | undefined
    website?: string | undefined
    attendant?: Record<any, AttendantTypo>
    activity?: Record<any, ActivityTypo>
    address?: Record<any, AdressTypo>
    available_dates?: Record<any, DatesTypo>
    testimonials?: Record<any, TestimonialsTypo>
    setProfessionals?: React.Dispatch<any>
    children?: ReactNode
    professionals?: any
    className?: any
    anchor?: any
}