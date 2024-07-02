import { faker } from "@faker-js/faker";

export function generateFakeTelemetryData(): ITelemetryData {
  return {
    PacketTitle: faker.lorem.words(2),
    AuxBms: {
      AllowCharge: faker.datatype.boolean(),
      AllowDischarge: faker.datatype.boolean(),
      AuxBmsAlive: faker.datatype.boolean(),
      AuxVoltage: faker.number.int({ min: 0, max: 100 }),
      ChargeContactorError: faker.datatype.boolean(),
      ChargeNotClosedDueToHighCurrent: faker.datatype.boolean(),
      ChargeOpenButShouldBeClosed: faker.datatype.boolean(),
      ChargeShouldTrip: faker.datatype.boolean(),
      ChargeTripDueToHighCellVoltage: faker.datatype.boolean(),
      ChargeTripDueToHighTemperatureAndCurrent: faker.datatype.boolean(),
      ChargeTripDueToPackCurrent: faker.datatype.boolean(),
      CommonContactorError: faker.datatype.boolean(),
      DischargeContactorError: faker.datatype.boolean(),
      DischargeNotClosedDueToHighCurrent: faker.datatype.boolean(),
      DischargeOpenButShouldBeClosed: faker.datatype.boolean(),
      DischargeShouldTrip: faker.datatype.boolean(),
      DischargeTripDueToHighTemperatureAndCurrent: faker.datatype.boolean(),
      DischargeTripDueToLowCellVoltage: faker.datatype.boolean(),
      DischargeTripDueToPackCurrent: faker.datatype.boolean(),
      HighVoltageEnableState: faker.datatype.boolean(),
      OrionCANReceivedRecently: faker.datatype.boolean(),
      PrechargeState: faker.lorem.words(2),
      ProtectionTrip: faker.datatype.boolean(),
      StrobeBmsLight: faker.datatype.boolean(),
      TripDueToOrionMessageTimeout: faker.datatype.boolean(),
    },
    Battery: {
      Alive: faker.datatype.boolean(),
      BMSRelayStatusFlags: {
        DischargeRelayEnabled: faker.datatype.boolean(),
        ChargeRelayEnabled: faker.datatype.boolean(),
        ChargerSafetyEnabled: faker.datatype.boolean(),
        MalfunctionIndicatorActive: faker.datatype.boolean(),
        MultiPurposeInputSignalStatus: faker.datatype.boolean(),
        AlwaysOnSignalStatus: faker.datatype.boolean(),
        IsReadySignalStatus: faker.datatype.boolean(),
        IsChargingSignalStatus: faker.datatype.boolean(),
      },
      PopulatedCells: faker.number.int({ min: 0, max: 100 }),
      "12vInputVoltage": faker.number.int({ min: 0, max: 100 }),
      FanVoltage: faker.number.int({ min: 0, max: 100 }),
      PackCurrent: faker.number.int({ min: 0, max: 100 }),
      PackVoltage: faker.number.int({ min: 0, max: 100 }),
      PackStateOfCharge: faker.number.int({ min: 0, max: 100 }),
      PackAmphours: faker.number.int({ min: 0, max: 100 }),
      PackDepthOfDischarge: faker.number.int({ min: 0, max: 100 }),
      HighTemperature: faker.number.int({ min: 0, max: 100 }),
      HighThermistorId: faker.number.int({ min: 0, max: 100 }),
      LowTemperature: faker.number.int({ min: 0, max: 100 }),
      LowThermistorId: faker.number.int({ min: 0, max: 100 }),
      AverageTemperature: faker.number.int({ min: 0, max: 100 }),
      InternalTemperature: faker.number.int({ min: 0, max: 100 }),
      FanSpeed: faker.number.int({ min: 0, max: 100 }),
      RequestedFanSpeed: faker.number.int({ min: 0, max: 100 }),
      LowCellVoltage: faker.number.int({ min: 0, max: 100 }),
      LowCellVoltageId: faker.number.int({ min: 0, max: 100 }),
      HighCellVoltage: faker.number.int({ min: 0, max: 100 }),
      HighCellVoltageId: faker.number.int({ min: 0, max: 100 }),
      AverageCellVoltage: faker.number.int({ min: 0, max: 100 }),
    },
    BatteryFaults: {
      ErrorFlags: {
        InternalCommunicationFault: faker.datatype.boolean(),
        InternalConversionFault: faker.datatype.boolean(),
        WeakCellFault: faker.datatype.boolean(),
        LowCellVoltageFault: faker.datatype.boolean(),
        OpenWiringFault: faker.datatype.boolean(),
        CurrentSensorFault: faker.datatype.boolean(),
        PackVoltageSensorFault: faker.datatype.boolean(),
        WeakPackFault: faker.datatype.boolean(),
        VoltageRedundancyFault: faker.datatype.boolean(),
        FanMonitorFault: faker.datatype.boolean(),
        ThermistorFault: faker.datatype.boolean(),
        CANBUSCommunicationsFault: faker.datatype.boolean(),
        AlwaysOnSupplyFault: faker.datatype.boolean(),
        HighVoltageIsolationFault: faker.datatype.boolean(),
        "12vPowerSupplyFault": faker.datatype.boolean(),
        ChargeLimitEnforcementFault: faker.datatype.boolean(),
        DischargeLimitEnforcementFault: faker.datatype.boolean(),
        ChargerSafetyRelayFault: faker.datatype.boolean(),
        InternalMemoryFault: faker.datatype.boolean(),
        InternalThermistorsFault: faker.datatype.boolean(),
        InternalLogicFault: faker.datatype.boolean(),
      },
      LimitFlags: {
        DclReducedDueToLowSoc: faker.datatype.boolean(),
        DclReducedDueToHighCellResistance: faker.datatype.boolean(),
        DclReducedDueToTemperature: faker.datatype.boolean(),
        DclReducedDueToLowCellVoltage: faker.datatype.boolean(),
        DclReducedDueToLowPackVoltage: faker.datatype.boolean(),
        DclandCclReducedDueToVoltageFailsafe: faker.datatype.boolean(),
        DclandCclReducedDueToCommunicationFailsafe: faker.datatype.boolean(),
        CclReducedDueToHighSoc: faker.datatype.boolean(),
        CclReducedDueToHighCellResistance: faker.datatype.boolean(),
        CclReducedDueToTemperature: faker.datatype.boolean(),
        CclReducedDueToHighCellVoltage: faker.datatype.boolean(),
        CclReducedDueToHighPackVoltage: faker.datatype.boolean(),
        CclReducedDueToChargerLatch: faker.datatype.boolean(),
        CclReducedDueToAlternateCurrentLimit: faker.datatype.boolean(),
      },
    },
    Ccs: {
      CcsAlive: faker.datatype.boolean(),
    },
    DriverControls: {
      Alive: faker.datatype.boolean(),
      HeadlightsOff: faker.datatype.boolean(),
      HeadlightsLow: faker.datatype.boolean(),
      HeadlightsHigh: faker.datatype.boolean(),
      SignalRight: faker.datatype.boolean(),
      SignalLeft: faker.datatype.boolean(),
      Hazard: faker.datatype.boolean(),
      Interior: faker.datatype.boolean(),
      Aux: faker.datatype.boolean(),
      VolumeUp: faker.datatype.boolean(),
      VolumeDown: faker.datatype.boolean(),
      NextSong: faker.datatype.boolean(),
      PrevSong: faker.datatype.boolean(),
      Acceleration: faker.number.int({ min: 0, max: 100 }),
      RegenBraking: faker.number.int({ min: 0, max: 100 }),
      Brakes: faker.datatype.boolean(),
      Forward: faker.datatype.boolean(),
      Reverse: faker.datatype.boolean(),
      PushToTalk: faker.datatype.boolean(),
      Horn: faker.datatype.boolean(),
      Reset: faker.datatype.boolean(),
      Lap: faker.datatype.boolean(),
    },
    KeyMotor: [
      {
        Alive: faker.datatype.boolean(),
        BusCurrent: faker.number.int({ min: 0, max: 100 }),
        BusVoltage: faker.number.int({ min: 0, max: 100 }),
        SetCurrent: faker.number.int({ min: 0, max: 100 }),
        SetVelocity: faker.number.int({ min: 0, max: 100 }),
        VehicleVelocity: faker.number.int({ min: 0, max: 100 }),
      },
      {
        Alive: faker.datatype.boolean(),
        BusCurrent: faker.number.int({ min: 0, max: 100 }),
        BusVoltage: faker.number.int({ min: 0, max: 100 }),
        SetCurrent: faker.number.int({ min: 0, max: 100 }),
        SetVelocity: faker.number.int({ min: 0, max: 100 }),
        VehicleVelocity: faker.number.int({ min: 0, max: 100 }),
      },
    ],
    MotorFaults: [
      {
        ErrorFlags: {
          MotorOverSpeed: faker.datatype.boolean(),
          SoftwareOverCurrent: faker.datatype.boolean(),
          DcBusOverVoltage: faker.datatype.boolean(),
          BadMotorPositionHallSequence: faker.datatype.boolean(),
          WatchdogCausedLastReset: faker.datatype.boolean(),
          ConfigReadError: faker.datatype.boolean(),
          Wail15VUnderVoltageLockOut: faker.datatype.boolean(),
          DesaturationFault: faker.datatype.boolean(),
        },
        LimitFlags: {
          OutputVoltagePwm: faker.datatype.boolean(),
          MotorCurrent: faker.datatype.boolean(),
          Velocity: faker.datatype.boolean(),
          BusCurrent: false,
          BusVoltageUpper: faker.datatype.boolean(),
          BusVoltageLower: faker.datatype.boolean(),
          IpmOrMotorTemperature: true,
        },
        RxErrorCount: faker.number.int({ min: 0, max: 100 }),
        TxErrorCount: faker.number.int({ min: 0, max: 100 }),
      },
      {
        ErrorFlags: {
          MotorOverSpeed: faker.datatype.boolean(),
          SoftwareOverCurrent: faker.datatype.boolean(),
          DcBusOverVoltage: faker.datatype.boolean(),
          BadMotorPositionHallSequence: faker.datatype.boolean(),
          WatchdogCausedLastReset: faker.datatype.boolean(),
          ConfigReadError: faker.datatype.boolean(),
          Wail15VUnderVoltageLockOut: faker.datatype.boolean(),
          DesaturationFault: faker.datatype.boolean(),
        },
        LimitFlags: {
          OutputVoltagePwm: faker.datatype.boolean(),
          MotorCurrent: faker.datatype.boolean(),
          Velocity: faker.datatype.boolean(),
          BusCurrent: false,
          BusVoltageUpper: faker.datatype.boolean(),
          BusVoltageLower: faker.datatype.boolean(),
          IpmOrMotorTemperature: true,
        },
        RxErrorCount: faker.number.int({ min: 0, max: 100 }),
        TxErrorCount: faker.number.int({ min: 0, max: 100 }),
      },
    ],
    MotorDetails: [
      {
        BackEmf: faker.number.int({ min: 0, max: 100 }),
        DcBusAmpHours: faker.number.int({ min: 0, max: 100 }),
        DspBoardTemp: faker.number.int({ min: 0, max: 100 }),
        HeatSinkTemp: faker.number.int({ min: 0, max: 100 }),
        MotorCurrentImaginary: faker.number.int({ min: 0, max: 100 }),
        MotorCurrentReal: faker.number.int({ min: 0, max: 100 }),
        MotorTemp: faker.number.int({ min: 0, max: 100 }),
        MotorVoltageImaginary: faker.number.int({ min: 0, max: 100 }),
        MotorVoltageReal: faker.number.int({ min: 0, max: 100 }),
        Odometer: faker.number.int({ min: 0, max: 100 }),
        SlipSpeed: faker.number.int({ min: 0, max: 100 }),
        PhaseBCurrent: faker.number.int({ min: 0, max: 100 }),
        PhaseCCurrent: faker.number.int({ min: 0, max: 100 }),
        VoltageRail15VSupply: faker.number.int({ min: 0, max: 100 }),
        VoltageRail1VSupply: faker.number.int({ min: 0, max: 100 }),
        VoltageRail3VSupply: faker.number.int({ min: 0, max: 100 }),
      },
      {
        BackEmf: faker.number.int({ min: 0, max: 100 }),
        DcBusAmpHours: faker.number.int({ min: 0, max: 100 }),
        DspBoardTemp: faker.number.int({ min: 0, max: 100 }),
        HeatSinkTemp: faker.number.int({ min: 0, max: 100 }),
        MotorCurrentImaginary: faker.number.int({ min: 0, max: 100 }),
        MotorCurrentReal: faker.number.int({ min: 0, max: 100 }),
        MotorTemp: faker.number.int({ min: 0, max: 100 }),
        MotorVoltageImaginary: faker.number.int({ min: 0, max: 100 }),
        MotorVoltageReal: faker.number.int({ min: 0, max: 100 }),
        Odometer: faker.number.int({ min: 0, max: 100 }),
        SlipSpeed: faker.number.int({ min: 0, max: 100 }),
        PhaseBCurrent: faker.number.int({ min: 0, max: 100 }),
        PhaseCCurrent: faker.number.int({ min: 0, max: 100 }),
        VoltageRail15VSupply: faker.number.int({ min: 0, max: 100 }),
        VoltageRail1VSupply: faker.number.int({ min: 0, max: 100 }),
        VoltageRail3VSupply: faker.number.int({ min: 0, max: 100 }),
      },
    ],
    Lights: {
      LowBeams: faker.datatype.boolean(),
      HighBeams: faker.datatype.boolean(),
      Brakes: faker.datatype.boolean(),
      LeftSignal: faker.datatype.boolean(),
      RightSignal: faker.datatype.boolean(),
      BmsStrobeLight: faker.datatype.boolean(),
      Alive: faker.datatype.boolean(),
    },
    MPPT: [
      {
        Alive: faker.datatype.boolean(),
        ArrayCurrent: faker.number.int({ min: 0, max: 100 }),
        ArrayVoltage: faker.number.int({ min: 0, max: 100 }),
        BatteryVoltage: faker.number.int({ min: 0, max: 100 }),
        Temperature: faker.number.int({ min: 0, max: 100 }),
      },
      {
        Alive: faker.datatype.boolean(),
        ArrayCurrent: faker.number.int({ min: 0, max: 100 }),
        ArrayVoltage: faker.number.int({ min: 0, max: 100 }),
        BatteryVoltage: faker.number.int({ min: 0, max: 100 }),
        Temperature: faker.number.int({ min: 0, max: 100 }),
      },
      {
        Alive: faker.datatype.boolean(),
        ArrayCurrent: faker.number.int({ min: 0, max: 100 }),
        ArrayVoltage: faker.number.int({ min: 0, max: 100 }),
        BatteryVoltage: faker.number.int({ min: 0, max: 100 }),
        Temperature: faker.number.int({ min: 0, max: 100 }),
      },
      {
        Alive: faker.datatype.boolean(),
        ArrayCurrent: faker.number.int({ min: 0, max: 100 }),
        ArrayVoltage: faker.number.int({ min: 0, max: 100 }),
        BatteryVoltage: faker.number.int({ min: 0, max: 100 }),
        Temperature: faker.number.int({ min: 0, max: 100 }),
      },
    ],
    TimeStamp: Date.now(),
    // TimeStamp: faker.date.soon().valueOf(),
  };
}
enum Motor {
  RightMotor = 1,
  LeftMotor = 0,
}
export default interface ITelemetryData {
  PacketTitle: string;
  TimeStamp: number;
  AuxBms: IAuxBms;
  KeyMotor: IKeyMotor[];
  MotorDetails: IMotorDetail[];
  DriverControls: IDriverControls;
  MotorFaults: IMotorFault[];
  BatteryFaults: IBatteryFault;
  Battery: IBattery;
  Ccs: ICcs;
  MPPT: IMPPT[];
  Lights: ILights;
}

export class LapData {
  constructor(
    timestamp: number,
    lapTime: number,
    totalPowerIn: number,
    totalPowerOut: number,
    netPowerOut: number,
    distance: number,
    amphours: number,
    averagePackCurrent: number,
    batterySecondsRemaining: number,
    averageSpeed: number
  ) {
    this.timestamp = timestamp;
    this.lapTime = lapTime;
    this.totalPowerIn = totalPowerIn;
    this.totalPowerOut = totalPowerOut;
    this.netPowerOut = netPowerOut;
    this.distance = distance;
    this.amphours = amphours;
    this.averagePackCurrent = averagePackCurrent;
    this.batterySecondsRemaining = batterySecondsRemaining;
    this.averageSpeed = averageSpeed;
  }

  lapNumber = -1;
  timestamp = -1;
  lapTime = -1;
  totalPowerIn = -1;
  totalPowerOut = -1;
  netPowerOut = -1;
  distance = -1;
  amphours = -1;
  averagePackCurrent = -1;
  batterySecondsRemaining = -1;
  lapsRemaining = -1;
  averageSpeed = -1;
}

export interface IAuxBms {
  AllowCharge: boolean;
  AllowDischarge: boolean;
  AuxBmsAlive: boolean;
  AuxVoltage: number;
  ChargeContactorError: boolean;
  ChargeOpenButShouldBeClosed: boolean;
  ChargeShouldTrip: boolean;
  ChargeTripDueToHighCellVoltage: boolean;
  ChargeTripDueToHighTemperatureAndCurrent: boolean;
  ChargeTripDueToPackCurrent: boolean;
  CommonContactorError: boolean;
  DischargeContactorError: boolean;
  DischargeOpenButShouldBeClosed: boolean;
  DischargeShouldTrip: boolean;
  DischargeTripDueToHighTemperatureAndCurrent: boolean;
  DischargeTripDueToLowCellVoltage: boolean;
  DischargeTripDueToPackCurrent: boolean;
  HighVoltageEnableState: boolean;
  OrionCANReceivedRecently: boolean;
  PrechargeState: string;
  ProtectionTrip: boolean;
  StrobeBmsLight: boolean;
  TripDueToOrionMessageTimeout: boolean;
  ChargeNotClosedDueToHighCurrent: boolean;
  DischargeNotClosedDueToHighCurrent: boolean;
}

export interface IKeyMotor {
  Alive: boolean;
  SetCurrent: number;
  SetVelocity: number;
  BusCurrent: number;
  BusVoltage: number;
  VehicleVelocity: number;
}

export interface IMotorDetail {
  PhaseCCurrent: number;
  PhaseBCurrent: number;
  MotorVoltageReal: number;
  MotorVoltageImaginary: number;
  MotorCurrentReal: number;
  MotorCurrentImaginary: number;
  BackEmf: number;
  VoltageRail15VSupply: number;
  VoltageRail3VSupply: number;
  VoltageRail1VSupply: number;
  HeatSinkTemp: number;
  MotorTemp: number;
  DspBoardTemp: number;
  DcBusAmpHours: number;
  Odometer: number;
  SlipSpeed: number;
}

export interface IDriverControls {
  Alive: boolean;
  HeadlightsOff: boolean;
  HeadlightsLow: boolean;
  HeadlightsHigh: boolean;
  SignalRight: boolean;
  SignalLeft: boolean;
  Hazard: boolean;
  Interior: boolean;
  Aux: boolean;
  VolumeUp: boolean;
  VolumeDown: boolean;
  NextSong: boolean;
  PrevSong: boolean;
  Acceleration: number;
  RegenBraking: number;
  Brakes: boolean;
  Forward: boolean;
  Reverse: boolean;
  PushToTalk: boolean;
  Horn: boolean;
  Reset: boolean;
  Lap: boolean;
}

export interface ILights {
  LowBeams: boolean;
  HighBeams: boolean;
  Brakes: boolean;
  LeftSignal: boolean;
  RightSignal: boolean;
  BmsStrobeLight: boolean;
  Alive: boolean;
}

export interface IBatteryFault {
  ErrorFlags: IBatteryErrorFlags;
  LimitFlags: IBatteryLimitFlags;
}

export interface IBatteryErrorFlags {
  InternalCommunicationFault: boolean;
  InternalConversionFault: boolean;
  WeakCellFault: boolean;
  LowCellVoltageFault: boolean;
  OpenWiringFault: boolean;
  CurrentSensorFault: boolean;
  PackVoltageSensorFault: boolean;
  WeakPackFault: boolean;
  VoltageRedundancyFault: boolean;
  FanMonitorFault: boolean;
  ThermistorFault: boolean;
  CANBUSCommunicationsFault: boolean;
  AlwaysOnSupplyFault: boolean;
  HighVoltageIsolationFault: boolean;
  "12vPowerSupplyFault": boolean;
  ChargeLimitEnforcementFault: boolean;
  DischargeLimitEnforcementFault: boolean;
  ChargerSafetyRelayFault: boolean;
  InternalMemoryFault: boolean;
  InternalThermistorsFault: boolean;
  InternalLogicFault: boolean;
}

export interface IBatteryLimitFlags {
  DclReducedDueToLowSoc: boolean;
  DclReducedDueToHighCellResistance: boolean;
  DclReducedDueToTemperature: boolean;
  DclReducedDueToLowCellVoltage: boolean;
  DclReducedDueToLowPackVoltage: boolean;
  DclandCclReducedDueToVoltageFailsafe: boolean;
  DclandCclReducedDueToCommunicationFailsafe: boolean;
  CclReducedDueToHighSoc: boolean;
  CclReducedDueToHighCellResistance: boolean;
  CclReducedDueToTemperature: boolean;
  CclReducedDueToHighCellVoltage: boolean;
  CclReducedDueToHighPackVoltage: boolean;
  CclReducedDueToChargerLatch: boolean;
  CclReducedDueToAlternateCurrentLimit: boolean;
}

export interface ICcs {
  CcsAlive: boolean;
}

export interface IMPPT {
  Alive: boolean;
  ArrayVoltage: number;
  ArrayCurrent: number;
  BatteryVoltage: number;
  Temperature: number;
}

export interface IMotorFault {
  ErrorFlags: IMotorErrorFlags;
  LimitFlags: IMotorLimitFlags;
  RxErrorCount: number;
  TxErrorCount: number;
}

export interface IMotorErrorFlags {
  MotorOverSpeed: boolean;
  SoftwareOverCurrent: boolean;
  DcBusOverVoltage: boolean;
  BadMotorPositionHallSequence: boolean;
  WatchdogCausedLastReset: boolean;
  ConfigReadError: boolean;
  Wail15VUnderVoltageLockOut: boolean;
  DesaturationFault: boolean;
}

export interface IMotorLimitFlags {
  OutputVoltagePwm: boolean;
  MotorCurrent: boolean;
  Velocity: boolean;
  BusCurrent: false; // TO DO - check this, why is this false?
  BusVoltageUpper: boolean;
  BusVoltageLower: boolean;
  IpmOrMotorTemperature: true;
}

export interface IBattery {
  Alive: boolean;
  BMSRelayStatusFlags: IBMSRelayStatusFlags;
  PopulatedCells: number;
  "12vInputVoltage": number;
  FanVoltage: number;
  PackCurrent: number;
  PackVoltage: number;
  PackStateOfCharge: number;
  PackAmphours: number;
  PackDepthOfDischarge: number;
  HighTemperature: number;
  HighThermistorId: number;
  LowTemperature: number;
  LowThermistorId: number;
  AverageTemperature: number;
  InternalTemperature: number;
  FanSpeed: number;
  RequestedFanSpeed: number;
  LowCellVoltage: number;
  LowCellVoltageId: number;
  HighCellVoltage: number;
  HighCellVoltageId: number;
  AverageCellVoltage: number;
}

export interface IBMSRelayStatusFlags {
  DischargeRelayEnabled: boolean;
  ChargeRelayEnabled: boolean;
  ChargerSafetyEnabled: boolean;
  MalfunctionIndicatorActive: boolean;
  MultiPurposeInputSignalStatus: boolean;
  AlwaysOnSignalStatus: boolean;
  IsReadySignalStatus: boolean;
  IsChargingSignalStatus: boolean;
}
