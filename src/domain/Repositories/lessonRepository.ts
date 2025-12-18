import { Lesson } from "../Entities/lesson"

export interface LessonRepository {
  create: (lesson: Lesson) => Promise<void>
}
