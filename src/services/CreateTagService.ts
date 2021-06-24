import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";


class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepository);

    //Verify if name is filled
    if (!name) {
      throw new Error("Name must not be empty!");
    }

    //Verify if name already exists
    const tagAlreadyExists = await tagsRepository.findOne({
      name
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists.");
    }

    //If name is filled and doesn't exists, create and save tag
    const tag = tagsRepository.create({ name });

    await tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };