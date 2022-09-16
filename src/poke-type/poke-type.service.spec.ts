import { Test, TestingModule } from '@nestjs/testing';
import { PokeTypeService } from './poke-type.service';

describe('PokeTypeService', () => {
  let service: PokeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokeTypeService],
    }).compile();

    service = module.get<PokeTypeService>(PokeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
