import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";
import { classToPlain } from "class-transformer";


class ListAllTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    // classToPlain will bring all custom fields created inside entity
    return classToPlain(tags);
  }
}

export { ListAllTagsService };