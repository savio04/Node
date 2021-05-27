import SpecificationRepository from "../../Repositories/Implementations/SpecificationRepository";
import CreateSpecificationController from "./CreateSpecificationController";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

export default () => {
    const specificationRepository = new SpecificationRepository

    const specificationUseCase = new CreateSpecificationUseCase(specificationRepository)

    const specificationController = new CreateSpecificationController(specificationUseCase)


    return specificationController
}