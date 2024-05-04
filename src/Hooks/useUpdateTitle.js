import { useState, useEffect } from "react"
export const useUpdateTitle = (title) => {
    useEffect(() => {
        document.title = title
    }, [title])
    return null
}
