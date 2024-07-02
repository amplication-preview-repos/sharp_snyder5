import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EmployeeController } from "../employee.controller";
import { EmployeeService } from "../employee.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  cadre: "exampleCadre",
  createdAt: new Date(),
  dateOfAppointmentInTheGazettedGrade: new Date(),
  dateOfAppointmentToThePresentPost: new Date(),
  dateOfBirth: new Date(),
  dateOfInitialAppointment: new Date(),
  dateOfRetirement: new Date(),
  department: "exampleDepartment",
  email: "exampleEmail",
  fatherSName: "exampleFatherSName",
  id: "exampleId",
  mobileNumber: "exampleMobileNumber",
  name: "exampleName",
  presentDesignation: "examplePresentDesignation",
  totalLengthOfService: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  address: "exampleAddress",
  cadre: "exampleCadre",
  createdAt: new Date(),
  dateOfAppointmentInTheGazettedGrade: new Date(),
  dateOfAppointmentToThePresentPost: new Date(),
  dateOfBirth: new Date(),
  dateOfInitialAppointment: new Date(),
  dateOfRetirement: new Date(),
  department: "exampleDepartment",
  email: "exampleEmail",
  fatherSName: "exampleFatherSName",
  id: "exampleId",
  mobileNumber: "exampleMobileNumber",
  name: "exampleName",
  presentDesignation: "examplePresentDesignation",
  totalLengthOfService: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    cadre: "exampleCadre",
    createdAt: new Date(),
    dateOfAppointmentInTheGazettedGrade: new Date(),
    dateOfAppointmentToThePresentPost: new Date(),
    dateOfBirth: new Date(),
    dateOfInitialAppointment: new Date(),
    dateOfRetirement: new Date(),
    department: "exampleDepartment",
    email: "exampleEmail",
    fatherSName: "exampleFatherSName",
    id: "exampleId",
    mobileNumber: "exampleMobileNumber",
    name: "exampleName",
    presentDesignation: "examplePresentDesignation",
    totalLengthOfService: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  cadre: "exampleCadre",
  createdAt: new Date(),
  dateOfAppointmentInTheGazettedGrade: new Date(),
  dateOfAppointmentToThePresentPost: new Date(),
  dateOfBirth: new Date(),
  dateOfInitialAppointment: new Date(),
  dateOfRetirement: new Date(),
  department: "exampleDepartment",
  email: "exampleEmail",
  fatherSName: "exampleFatherSName",
  id: "exampleId",
  mobileNumber: "exampleMobileNumber",
  name: "exampleName",
  presentDesignation: "examplePresentDesignation",
  totalLengthOfService: 42,
  updatedAt: new Date(),
};

const service = {
  createEmployee() {
    return CREATE_RESULT;
  },
  employees: () => FIND_MANY_RESULT,
  employee: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Employee", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeService,
          useValue: service,
        },
      ],
      controllers: [EmployeeController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /employees", async () => {
    await request(app.getHttpServer())
      .post("/employees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfAppointmentInTheGazettedGrade:
          CREATE_RESULT.dateOfAppointmentInTheGazettedGrade.toISOString(),
        dateOfAppointmentToThePresentPost:
          CREATE_RESULT.dateOfAppointmentToThePresentPost.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        dateOfInitialAppointment:
          CREATE_RESULT.dateOfInitialAppointment.toISOString(),
        dateOfRetirement: CREATE_RESULT.dateOfRetirement.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /employees", async () => {
    await request(app.getHttpServer())
      .get("/employees")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfAppointmentInTheGazettedGrade:
            FIND_MANY_RESULT[0].dateOfAppointmentInTheGazettedGrade.toISOString(),
          dateOfAppointmentToThePresentPost:
            FIND_MANY_RESULT[0].dateOfAppointmentToThePresentPost.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          dateOfInitialAppointment:
            FIND_MANY_RESULT[0].dateOfInitialAppointment.toISOString(),
          dateOfRetirement: FIND_MANY_RESULT[0].dateOfRetirement.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /employees/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employees"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employees/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employees"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfAppointmentInTheGazettedGrade:
          FIND_ONE_RESULT.dateOfAppointmentInTheGazettedGrade.toISOString(),
        dateOfAppointmentToThePresentPost:
          FIND_ONE_RESULT.dateOfAppointmentToThePresentPost.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        dateOfInitialAppointment:
          FIND_ONE_RESULT.dateOfInitialAppointment.toISOString(),
        dateOfRetirement: FIND_ONE_RESULT.dateOfRetirement.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /employees existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfAppointmentInTheGazettedGrade:
          CREATE_RESULT.dateOfAppointmentInTheGazettedGrade.toISOString(),
        dateOfAppointmentToThePresentPost:
          CREATE_RESULT.dateOfAppointmentToThePresentPost.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        dateOfInitialAppointment:
          CREATE_RESULT.dateOfInitialAppointment.toISOString(),
        dateOfRetirement: CREATE_RESULT.dateOfRetirement.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/employees")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
