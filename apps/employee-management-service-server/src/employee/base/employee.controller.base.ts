/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmployeeService } from "../employee.service";
import { EmployeeCreateInput } from "./EmployeeCreateInput";
import { Employee } from "./Employee";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { TransferFindManyArgs } from "../../transfer/base/TransferFindManyArgs";
import { Transfer } from "../../transfer/base/Transfer";
import { TransferWhereUniqueInput } from "../../transfer/base/TransferWhereUniqueInput";

export class EmployeeControllerBase {
  constructor(protected readonly service: EmployeeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employee })
  async createEmployee(
    @common.Body() data: EmployeeCreateInput
  ): Promise<Employee> {
    return await this.service.createEmployee({
      data: data,
      select: {
        address: true,
        cadre: true,
        createdAt: true,
        dateOfAppointmentInTheGazettedGrade: true,
        dateOfAppointmentToThePresentPost: true,
        dateOfBirth: true,
        dateOfInitialAppointment: true,
        dateOfRetirement: true,
        department: true,
        email: true,
        fatherSName: true,
        gender: true,
        id: true,
        mobileNumber: true,
        name: true,
        presentDesignation: true,
        totalLengthOfService: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Employee] })
  @ApiNestedQuery(EmployeeFindManyArgs)
  async employees(@common.Req() request: Request): Promise<Employee[]> {
    const args = plainToClass(EmployeeFindManyArgs, request.query);
    return this.service.employees({
      ...args,
      select: {
        address: true,
        cadre: true,
        createdAt: true,
        dateOfAppointmentInTheGazettedGrade: true,
        dateOfAppointmentToThePresentPost: true,
        dateOfBirth: true,
        dateOfInitialAppointment: true,
        dateOfRetirement: true,
        department: true,
        email: true,
        fatherSName: true,
        gender: true,
        id: true,
        mobileNumber: true,
        name: true,
        presentDesignation: true,
        totalLengthOfService: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async employee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    const result = await this.service.employee({
      where: params,
      select: {
        address: true,
        cadre: true,
        createdAt: true,
        dateOfAppointmentInTheGazettedGrade: true,
        dateOfAppointmentToThePresentPost: true,
        dateOfBirth: true,
        dateOfInitialAppointment: true,
        dateOfRetirement: true,
        department: true,
        email: true,
        fatherSName: true,
        gender: true,
        id: true,
        mobileNumber: true,
        name: true,
        presentDesignation: true,
        totalLengthOfService: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmployee(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() data: EmployeeUpdateInput
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        where: params,
        data: data,
        select: {
          address: true,
          cadre: true,
          createdAt: true,
          dateOfAppointmentInTheGazettedGrade: true,
          dateOfAppointmentToThePresentPost: true,
          dateOfBirth: true,
          dateOfInitialAppointment: true,
          dateOfRetirement: true,
          department: true,
          email: true,
          fatherSName: true,
          gender: true,
          id: true,
          mobileNumber: true,
          name: true,
          presentDesignation: true,
          totalLengthOfService: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmployee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee({
        where: params,
        select: {
          address: true,
          cadre: true,
          createdAt: true,
          dateOfAppointmentInTheGazettedGrade: true,
          dateOfAppointmentToThePresentPost: true,
          dateOfBirth: true,
          dateOfInitialAppointment: true,
          dateOfRetirement: true,
          department: true,
          email: true,
          fatherSName: true,
          gender: true,
          id: true,
          mobileNumber: true,
          name: true,
          presentDesignation: true,
          totalLengthOfService: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/promotions")
  @ApiNestedQuery(PromotionFindManyArgs)
  async findPromotions(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Promotion[]> {
    const query = plainToClass(PromotionFindManyArgs, request.query);
    const results = await this.service.findPromotions(params.id, {
      ...query,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        officeOrder: true,
        promotionDate: true,
        promotionDetails: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/promotions")
  async connectPromotions(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/promotions")
  async updatePromotions(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/promotions")
  async disconnectPromotions(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/transfers")
  @ApiNestedQuery(TransferFindManyArgs)
  async findTransfers(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Transfer[]> {
    const query = plainToClass(TransferFindManyArgs, request.query);
    const results = await this.service.findTransfers(params.id, {
      ...query,
      select: {
        createdAt: true,
        details: true,

        employee: {
          select: {
            id: true,
          },
        },

        fromLocation: true,
        id: true,
        toLocation: true,
        transferDate: true,
        transferOrder: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transfers")
  async connectTransfers(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: TransferWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transfers: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transfers")
  async updateTransfers(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: TransferWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transfers: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transfers")
  async disconnectTransfers(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: TransferWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transfers: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }
}