import { Lesson } from "../../../types/index"

export default class User {
  id: string
  name: string
  email: string
  password: string
  accessRight: "administrator" | "moderator" | "user"
  postLesson: (lesson: Lesson) => void
}
