import { watch } from 'vue'

export function useWatch() {
    // 简单监听
    const simple = <T>(getter: () => T, setter: (value: T) => void, emptyIf: boolean = false, immediate: boolean = true) => {
        return watch(
            getter,
            (value) => {
                if (emptyIf && (value !== undefined || value !== null)) {
                    setter(value)
                } else {
                    setter(value)
                }
            },
            { immediate: immediate }
        )
    }
  
    return {
        simple,
    }
}