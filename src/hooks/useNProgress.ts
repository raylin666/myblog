import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

export function useNProgress() {
  // 配置进度条
  NProgress.configure({ 
    showSpinner: false,
    speed: 500,
    minimum: 0.1
  })

  const router = useRouter()

  const handleStart = () => {
    NProgress.start()
  }

  const handleEnd = () => {
    NProgress.done()
  }

  const handleError = () => {
    NProgress.done()
  }

  onMounted(() => {
    router.beforeEach(handleStart)
    router.afterEach(handleEnd)
    router.onError(handleError)
  })

  onBeforeUnmount(() => {
    router.beforeEach(() => {})
    router.afterEach(() => {})
    router.onError(() => {})
  })

  return {
    start: handleStart,
    done: handleEnd,
    error: handleError
  }
}