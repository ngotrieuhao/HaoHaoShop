import { isAxiosError } from 'axios'
import { describe, it, expect } from 'vitest'
// describe dùng để mô tả tập hợp các ngữ cảnh
//hoặc đơn vị cần test: Ví dụ function, component
describe('isAxiosError', () => {
  // it dùng để ghi chú trường hợp cần test
  it('isAxiosError trả về boolean', () => {
    //expect dùng để mong đợi giá trị trả về
    expect(isAxiosError(new Error())).toBe(false)
  })
})
