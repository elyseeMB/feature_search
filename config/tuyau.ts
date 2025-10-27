import { defineConfig } from '@tuyau/core'

const tuyauConfig = defineConfig({
  codegen: {
    /**
     * Filters the definitions and named router to be generated
     */
    // definitions: {
    //  only: [],
    // }
    // router: {
    //  only: [],
    // }
  },
})

export default tuyauConfig
