import SpecificationRepository from "../../Repositories/Implementations/SpecificationRepository";
import CreateSpecificationController from "./CreateSpecificationController";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository

const specificationUseCase = new CreateSpecificationUseCase(specificationRepository)

const specificationController = new CreateSpecificationController(specificationUseCase)


export default specificationController